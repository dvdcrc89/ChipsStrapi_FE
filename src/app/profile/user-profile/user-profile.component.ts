import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const PROFILE_QUERY = (id: number): DocumentNode =>{
  return gql`
  query BasicUsers {
    basicUser(id:${id}) {
      profile {
        name,
        profileImage,
        coverImage,
        message,
        bio,
        cv,
        interests
      },
      jobs_applications {
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
      filter(user => user),
    )
    .subscribe(
      (user) => {
        console.log(user);
        const { basic_user, business_user } = user;
        if(!basic_user) {
          business_user  
            ? this.router.navigate(['/profile/business'])
            : this.router.navigate(['/'])
        }
        this.userProfile$ = this.runProfileQuery(basic_user);
      }
    )
  }

  private runProfileQuery(id: number) {
    return this.apollo
            .watchQuery<any>({
              query: PROFILE_QUERY(id)
            })
            .valueChanges;
   }
}
