import { Apollo }             from 'apollo-angular';
import { ApolloQueryResult }  from 'apollo-client';
import { AuthService }        from '../service/auth-service/auth.service';
import { Component, OnInit }  from '@angular/core';
import { DocumentNode }       from 'graphql';
import { FetchResult }        from 'apollo-link';
import { filter, switchMap }  from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable }         from 'rxjs';
import { Restaurant, BusinessUser, CreateShiftDatePayload } from 'src/types/schema';
import * as moment            from 'moment';
import gql                    from 'graphql-tag';
import { UserInfo } from 'os';

export type ShiftDateGroup = {
  Date:     (string | ((control: AbstractControl) => ValidationErrors))[],
  StartAt:  (string | ((control: AbstractControl) => ValidationErrors))[],
  EndAt:    (string | ((control: AbstractControl) => ValidationErrors))[]
}

export type CreateShiftDateWithPayload = {
    createShiftDate: CreateShiftDatePayload
}
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
  selector: 'add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  
  /** Reactive Form */
  public addForm: FormGroup;

  /**Server comunication has failed */
  public didFail: boolean = false;
  
  /** Data is loading */
  public loading: boolean;

  /** Restaurant  of add job component */
  private restaurant: Pick<Restaurant, "name" | "id">;

  /**
   * Creates an instance of add job component.
   * @param authService 
   * @param fb 
   * @param apollo 
   */
  constructor(
    private authService: AuthService, 
    public fb: FormBuilder,
    private apollo: Apollo) { }

  
  /** Form Submit */
  onSubmit(){
    this.runMutation();
  }

  /** Gets shift dates AbstractControl Array */
  get shift_dates(): AbstractControl[] {
    return (this.addForm.get('shift_date') as FormArray).controls
  }

  /** Gets Shifts as Form Array */
  get shiftsAsArray(): FormArray {
    return this.addForm.get('shift_date') as FormArray
  }

  /** Shift date Form Group */
  private shiftDateGroup: ShiftDateGroup  = {
    Date:     [ '', Validators.required ],
    StartAt:  [ '', Validators.required ],
    EndAt:    [ '', Validators.required ]
  };

  ngOnInit(): void {
    this.loading = true;
    this.authService._user
    .pipe(
      filter(user => user),
      switchMap(({ business_user } : { business_user: number }) =>{
        if(!business_user){
          throw new Error('You cant add jobs, Please sign as bussiness')
        }
        return this.runQuery(business_user);
      })
    )
    .subscribe((result: ApolloQueryResult<{businessUser:BusinessUser}>) =>{
      this.loading    = false;
      this.restaurant = result.data.businessUser.restaurant;
      this.initForm(this.restaurant.id);
    },
    (err)=>{
      console.log(err);
    })

  }

  /**
   * Init Add Job Form
   * @param restaurantID 
   */
  initForm(restaurantID: string){
    this.addForm = this.fb.group(
      {
        restaurant:   [restaurantID, Validators.required],
        Type:         ['', Validators.required],
        position:     ['', Validators.required],
        description:  ['', Validators.required],
        payPerHour:   ['', Validators.required],
        shift_date:   this.fb.array([
            this.fb.group(this.shiftDateGroup)
          ]),
      }
    );
  }

  /** Adds Shift date to Array builder */
  addShiftDate(){
    this.shiftsAsArray.push(this.fb.group(this.shiftDateGroup))
  }

  /**
   * Removes Shift date from Array Builder
   * @param i 
   */
  remove(i: number){
    this.shiftsAsArray.removeAt(i);
  }


  /**
   * Runs query
   * @param id 
   * @returns query 
   */
  private runQuery(id: number)
    : Observable<ApolloQueryResult<{businessUser: BusinessUser}>> {
    
    return this.apollo
            .watchQuery<{businessUser:BusinessUser}>({
              query: PROFILE_QUERY(id)
            })
            .valueChanges;
   }

   /** Runs Add Job Mutation */
   private runMutation(){
     this.runShiftMutation()
     .pipe(
       switchMap(({data}: { data: CreateShiftDateWithPayload }) => {
  
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
       ()=>{
        //TO DO, RESET FORM, MAYBE REDIRECT
        this.didFail = false
       },
      ()=>{
        this.didFail = true
      }
      );

   }


   /**
    * Runs shift mutation
    * @returns shift mutation 
    */
   private runShiftMutation(): 
  Observable<FetchResult<CreateShiftDateWithPayload, Record<string, any>, Record<string, any>>>{
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
