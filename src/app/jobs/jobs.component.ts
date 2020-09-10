import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service/auth.service';
import { Apollo, SelectPipe } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { filter, switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

const JOBS_QUERY = (): DocumentNode => {
  return gql`
  query Jobs {
      jobs {
        Type,
        UID,
        description,
        payPerHour,
        position,
        restaurant {
          name,
          address,
          latitude,
          longitude
        }
        shift_date{
          date {
            Date,
            StartAt,
            EndAt
          }
        }
      }
    } 
  `
} 


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobsList$: Observable<ApolloQueryResult<any>>

  constructor(
    private authService: AuthService, 
    private apollo: Apollo,
  ) { }

  ngOnInit(): void {
    this.authService._user
    .pipe(
      filter(user => user),
    )
    .subscribe(()=>{
      this.jobsList$ = this.runProfileQuery();
    });

  }

  private runProfileQuery() {
    return this.apollo
            .watchQuery<any>({
              query: JOBS_QUERY()
            }).valueChanges;
   }
}
