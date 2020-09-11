import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form, AbstractControl } from '@angular/forms';
import { Jobs, Restaurant, BusinessUser, ShiftDateInput, MutationCreateJobArgs, CreateJobPayload, JobInput, CreateShiftDatePayload } from 'src/types/schema';
import { AuthService } from '../service/auth-service/auth.service';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { filter, switchMap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import * as moment from 'moment';


/** 
 * TO DO
 * Move logic inside service ?
 * Divide Shift Dates in his own component
 * Create backend resolver to handle both query in one go
 * Better handle validation
 * - Date is in the future
 * - StartAt is lower than EndAt (allow EndAt lower then StartAt for night shift, but show warning)
 * - Merge Type and Position in one select
 * 
*/
const PROFILE_QUERY = (id: number): DocumentNode =>{
  return gql`
  query BusinessUser {
    businessUser(id:${id}) {
      restaurant {
        name,
        id
      }
    }
  } 
`
} 

const JOB_MUTATION = gql`
    mutation CreateJob($job: JobInput) {
      createJob(input: { data: $job }) {
           job{
              id,
              Type,
              shift_date{
              date { 
                  Date,
                  StartAt,
                  EndAt
                }
              },
              description,
              payPerHour,
              position    
           }  
      }
}`

const SHIFT_MUTATION = gql`
mutation CreateShiftDate($shift_date: ShiftDateInput) {
  createShiftDate(input: { data: $shift_date }) {
      shiftDate{
          id
       }  
  }
}`

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  
  addForm: FormGroup;
  values: Jobs;
  didFail: boolean = false;
  loading: boolean;
  private restaurant: Restaurant;

  constructor(
    private authService: AuthService, 
    public fb: FormBuilder,
    private apollo: Apollo) { }

  onSubmit(){
    this.runMutation();
  }

  get shift_dates(): AbstractControl[] {
    return (this.addForm.get('shift_date') as FormArray).controls
  }

  get shiftsAsArray(): FormArray {
    return this.addForm.get('shift_date') as FormArray
  }

  private shiftDateGroup: any  = {
    Date: ['',Validators.required],
    StartAt: ['',Validators.required],
    EndAt: ['',Validators.required]
  };

  ngOnInit(): void {
    console.log(moment);
    this.loading = true;
    this.authService._user
    .pipe(
      filter(user => user),
      switchMap((user) =>{
        const {business_user} = user;
        if(!business_user){
          throw new Error('You cant add jobs, Please sign as bussiness')
        }
        return this.runQuery(business_user);
      })
    )
    .subscribe((result: ApolloQueryResult<{businessUser:BusinessUser}>) =>{
      this.loading = false;
      this.restaurant = result.data.businessUser.restaurant;
      this.initForm(this.restaurant.id);
    },
    (err)=>{
      console.log(err);
    })

  }

  initForm(restaurantID: string){
    this.addForm = this.fb.group(
      {
        restaurant: [restaurantID, Validators.required],
        Type: ['', Validators.required],
        position: ['', Validators.required],
        description: ['', Validators.required],
        payPerHour: ['', Validators.required],
        shift_date: this.fb.array([
          this.fb.group(this.shiftDateGroup)
      ]),
      }
    );
  }
  addShiftDate(){
    this.shiftsAsArray.push(this.fb.group(this.shiftDateGroup))
  }

  remove(i: number){
    this.shiftsAsArray.removeAt(i);
  }

  private runQuery(id: number) {
    return this.apollo
            .watchQuery<{businessUser:BusinessUser}>({
              query: PROFILE_QUERY(id)
            })
            .valueChanges;
   }


   private runMutation(){
     this.runShiftMutation()
     .pipe(
       switchMap(({data}: any) => {
         console.log("DATA",data);
        if(!data?.createShiftDate?.shiftDate?.id){
          throw new Error('Something went wrong');
        }
        return this.apollo.mutate({
          mutation: JOB_MUTATION,
          variables: {
            __typename: "createJobPayload",
            job: {...this.addForm.value, shift_date: data.createShiftDate.shiftDate.id}
          }
        })
       } 
     )).subscribe(
       (res)=>{
        this.didFail = false
       },
      (err)=>{
        this.didFail = true
      }
      );

   }

   private runShiftMutation(){
    return this.apollo.mutate({
      mutation: SHIFT_MUTATION,
      variables: {
        __typename: "createShiftDatePayload",
        shift_date: {date: this.addForm.value['shift_date'].map(date => ({
            Date: moment(date.Date).format('YYYY-MM-DD'),
            StartAt: date.StartAt+':00:000',
            EndAt: date.EndAt+':00:000'
          })
        )}
      }
    })
   }
}
