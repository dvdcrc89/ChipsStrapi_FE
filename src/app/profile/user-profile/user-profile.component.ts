import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { STATUS } from 'src/app/class/UserWrapper';

const PROFILE_QUERY = (id: string): DocumentNode =>{
  return gql`
  query BasicUsers {
    basicUser(id:${id}) {
      id,
      profile {
        id,
        name,
        profileImage,
        coverImage,
        message,
        bio,
        cv,
        interests
      },
      job_applications {
        id,
        job {
          id
        }
      }
    }
  }
`
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfile$: Observable<ApolloQueryResult<any>>

  constructor(
    private authService: AuthService,
    private apollo: Apollo,
    private router: Router) {}

  ngOnInit(): void {
    this.authService._user.pipe(
      filter(user => !!user),
    )
    .subscribe(
      (user) => {
        const { basic_user, status } = user;
          console.log(status)
          status === STATUS.BUSINESS_USER && this.router.navigate(['/profile/business'])
          if(status === STATUS.BASIC_USER) {
            this.userProfile$ = this.runProfileQuery(basic_user);
          }


      }
    )
  }

  private runProfileQuery(id: string) {
    return this.apollo
            .watchQuery<any>({
              query: PROFILE_QUERY(id)
            })
            .valueChanges;
   }
}
