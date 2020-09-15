import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Apollo } from 'apollo-angular';
import { filter } from 'rxjs/internal/operators/filter';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { STATUS } from 'src/app/class/UserWrapper';

const PROFILE_QUERY = (id: string): DocumentNode =>{
  return gql`
  query BusinessUser {
    businessUser(id:${id}) {
      id,
      restaurant {
        id,
        name,
        website,
        address,
        latitude,
        longitude,
        jobs {
          id,
          Type,
          shift_date{
            id,
            date{
              Date,
              StartAt,
              EndAt
            }
          }
        }
      }
    }
  } 
`
} 

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessProfile$: Observable<ApolloQueryResult<any>>

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
        const { business_user, status } = user;
          status === STATUS.BASIC_USER && this.router.navigate(['/profile/me'])
          if(status === STATUS.BUSINESS_USER){
            this.businessProfile$ = this.runProfileQuery(business_user);
          }
        } 
      
    )
  }

  private runProfileQuery(id: string) {
    return this.apollo
            .watchQuery<any>({
              query: PROFILE_QUERY(id)
            }).valueChanges;
   }

}
