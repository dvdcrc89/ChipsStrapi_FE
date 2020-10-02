import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { BusinessUser, CreateShiftDatePayload } from 'src/types/schema';
import { AuthService } from '../service/auth-service/auth.service';
import { JOB_MUTATION, PROFILE_QUERY, SHIFT_MUTATION } from './add-job.query';
import { CreateShiftDateWithPayload } from './model/add-job.model';
/// TTTO Merge Create Job and Create Shift Dates in one Mutation ( Backend )
@Injectable({
  providedIn: 'root'
})
export class AddJobService {

  constructor(private apollo: Apollo, private authService: AuthService) { }


  /**
   * Creates new job
   * @param formValues
   * @returns
   */
  public createNewJob(formValues){
    console.log(formValues);
    const {shift_date, ...values} = formValues;

    return this.createShiftDates(shift_date)
    .pipe(
      switchMap(({data}: { data: CreateShiftDateWithPayload }) => {

       if(!data?.createShiftDate?.shiftDate?.id){
         throw new Error('Something went wrong');
       }

       return this.createJob(values, data.createShiftDate.shiftDate.id)
      })
      )

  }

  /**
   * Runs Business Profile query
   * @param id
   * @returns query
   */
  public getProfile()
    : Observable<ApolloQueryResult<{businessUser: BusinessUser}>> {
      return this.authService.user
          .pipe(
            filter(user => !!user),
            switchMap(({ business_user }) =>{
              if(!business_user){
                throw new Error('You cant add jobs, Please sign as bussiness')
              }
              return this.apollo
                      .watchQuery<{businessUser:BusinessUser}>({
                      query: PROFILE_QUERY,
                      variables: {
                        id: business_user
                      }
                    })
                    .valueChanges
            })
          )
   }


  /**
   * Creates job entity
   * @param values
   * @param shift_dates_id
   * @returns
   */
  private createJob(values, shift_dates_id: string){
    return this.apollo.mutate({
      mutation: JOB_MUTATION,
      variables: {
        __typename: 'createJobPayload',
        job: {...values, shift_date: shift_dates_id }
      }
    })
  }

  /**
   * Creates shift dates entity
   * @param shift_date
   * @returns shift dates
   */
  private createShiftDates(shift_date):
  Observable<FetchResult<CreateShiftDateWithPayload, Record<string, any>, Record<string, any>>>{
    return this.apollo.mutate({
      mutation: SHIFT_MUTATION,
      variables: {
        __typename: 'createShiftDatePayload',
        shift_date: {date: shift_date.map(date => ({
            Date: moment(date.Date).format('YYYY-MM-DD'),
            StartAt: date.StartAt+':00:000',
            EndAt: date.EndAt+':00:000'
          })
        )}
      }
    })
   }
}
