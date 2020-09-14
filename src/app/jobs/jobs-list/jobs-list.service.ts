import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { Observable, of } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Jobs } from 'src/types/schema';
import { JobsWithCount } from '../model/jobs.model';
import { APPLY_MUTATION, JOBS_APPLICATIONS, JOBS_QUERY } from './jobs-list.query';

@Injectable({
  providedIn: 'root'
})
export class JobsListService {

  constructor(
    private apollo: Apollo,
    private authService: AuthService
  ) { }


  /**
   * Runs jobs query
   * @param limit 
   * @param start 
   * @returns jobs query 
   */
  private runJobsQuery(limit: number, start: number): Observable<ApolloQueryResult<JobsWithCount>> {
    return this.apollo
            .watchQuery<JobsWithCount>({
              query: JOBS_QUERY,
              variables:{
                limit,
                start
              }
            }).valueChanges;
   }

   /**
    * Gets jobs
    * @param limit 
    * @param start 
    * @returns jobs 
    */
   public getJobs(limit: number, start: number): Observable<Jobs[]> {
    return this.authService._user
            .pipe(
              filter(user => !!user),
              switchMap(_ => this.runJobsQuery(limit,start)),
              map(({data})=> data.jobs)
            )
   }

   /**
    * Gets total jobs
    * @param limit 
    * @param start 
    * @returns total jobs 
    */
   public getTotalJobs(limit,start): Observable<number>{
    return  this.authService._user
                      .pipe(
                        filter(user => !!user),
                        switchMap(_ => this.runJobsQuery(limit,start)),
                        map(({data})=> data.jobsConnection.aggregate.count || 0)
                      )
  }


  /**
   * Gets jobs application
   * @returns jobs application 
   */
  public getJobsApplication(): Observable<{[key: number]: boolean}> {
    const mapToObject = ({data})=> data?.basicUser?.job_applications ? 
                                  data?.basicUser?.job_applications.reduce(
                                      (acc,el)=>({...acc,[el.job.id]: true})
                                    ,Object.create(null)) : Object.create(null);

    return this.authService._user
            .pipe(
              filter(user => !!user),
              switchMap(({basic_user}) =>{
                if(basic_user){
                  return this.runJobsApplicationQuery(basic_user)
                }
                return of({data: null})
              }),
              map(mapToObject)
            )
  }

  /**
   * Runs jobs application query
   * @param id 
   * @returns  
   */
  private runJobsApplicationQuery(id: string) {
    return this.apollo
            .watchQuery<any>({
              query: JOBS_APPLICATIONS,
              variables:{
                id
              }
            }).valueChanges;
   }


   /**
    * Apply to a job, if has applied already cancel application
    * @param job_id 
    * @returns to job 
    */
   public applyToJob(job_id: string): 
   Observable<FetchResult<any, Record<string, any>, Record<string, any>>>{
     console.log(job_id);
    return this.authService._user
            .pipe(
              filter(user => !!user),
              switchMap(({basic_user}) =>{
                if(basic_user){
                  return this.apollo.mutate({
                    mutation: APPLY_MUTATION,
                    variables: {
                      basic_user,
                      job: job_id
                    }
                  })
                }
              }),  
            )
    }
}
