import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Jobs } from 'src/types/schema';

const APPLY_MUTATION = gql`
mutation CreateJobsApplication($basic_user:ID!, $job:ID!) {
  jobsApplicationToggle(input: { data:{job:$job, basic_user:$basic_user}})
}`


const HAS_APPLIED = gql` 
query HasAppliedToJob($jobid:ID!, $userid:ID!) {
    hasAppliedToJob(jobid: $jobid, userid: $userid)
}`



@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  @Input()
  job: Jobs;
  applied: BehaviorSubject<boolean> = new BehaviorSubject(false); 

  constructor(
    private apollo: Apollo,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.auth._user.pipe(
      filter((user) => user),
      switchMap(({basic_user}) =>{
        return this.hasApplied(this.job.id,basic_user);
     })
    ).subscribe((data) => this.applied.next(!!data));
  }

  toggleJob(apply: boolean = true){
    this.auth._user.pipe(
      filter(user => user),
      switchMap(({basic_user}) =>{
        return this.runJobAppMutation(this.job.id, basic_user, apply).pipe(map(({data})=>data.jobsApplicationToggle))
      })
    )
    .subscribe((data) => {
      this.applied.next(!!data)
    })
  
  }

  private runJobAppMutation(job_id, user_id, apply = true): 
  Observable<FetchResult<any, Record<string, any>, Record<string, any>>>{
    return this.apollo.mutate({
      mutation: APPLY_MUTATION,
      variables: {
        basic_user: user_id,
        job: job_id
      }
    })
   }

   private hasApplied(job_id, user_id){
    return this.apollo
      .watchQuery<any>({
        query: HAS_APPLIED,
        variables:{
          userid: user_id,
          jobid: job_id
        }
      }).valueChanges.pipe(map(({data})=>data.hasAppliedToJob));
  }
   
}
