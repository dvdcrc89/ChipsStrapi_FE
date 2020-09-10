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
  query Jobs($limit:Int, $start: Int) {
      jobs(limit: $limit, start: $start) {
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
      },
      jobsConnection {
        aggregate {
          count
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

  cursor: number = 0;

  currentPage: number = 1;

  itemPerPage: number = 2;

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

  changePage(page: number){
    this.cursor = (page-1)*this.itemPerPage;
    this.currentPage = page;
    this.jobsList$ = this.runProfileQuery();
  }
 
  private runProfileQuery() {
    return this.apollo
            .watchQuery<any>({
              query: JOBS_QUERY(),
              variables:{
                limit: this.itemPerPage,
                start: this.cursor
              }
            }).valueChanges;
   }
}
