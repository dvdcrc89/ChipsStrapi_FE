import { ApolloQueryResult }  from 'apollo-client';
import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Restaurant, BusinessUser } from 'src/types/schema';
import { ShiftDateGroup } from './model/add-job.model';
import { AddJobService } from './add-job.service';


/**
 * TO DO
 * Move logic inside service ?
 * Divide Shift Dates in his own component
 * Better handle validation
 * - Date is in the future
 * - StartAt is lower than EndAt (allow EndAt lower then StartAt for night shift, but show warning)
 * - Merge Type and Position in one select
 *
*/


@Component({
  selector: 'add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  /**
   * Creates an instance of add job component.
   * @param authService
   * @param fb
   * @param apollo
   */
  constructor(
    public fb: FormBuilder,
    private addJobService: AddJobService) { }

  /** Gets shift dates AbstractControl Array */
  get shift_dates(): AbstractControl[] {
    return (this.addForm.get('shift_date') as FormArray).controls
  }

  /** Gets Shifts as Form Array */
  get shiftsAsArray(): FormArray {
    return this.addForm.get('shift_date') as FormArray
  }

  /** Reactive Form */
  public addForm: FormGroup;

  /**Server comunication has failed */
  public didFail = false;

  /** Data is loading */
  public loading: boolean;

  /** Restaurant  of add job component */
  private restaurant: Pick<Restaurant, 'name' | 'id'>;

  /** Shift date Form Group */
  private shiftDateGroup: ShiftDateGroup  = {
    Date:     [ '', Validators.required ],
    StartAt:  [ '', Validators.required ],
    EndAt:    [ '', Validators.required ]
  };


  /** Form Submit */
  onSubmit(){
    this.runMutation();
  }

  ngOnInit(): void {
    this.loading = true;
    this.addJobService.getProfile()
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




   /** Runs Add Job Mutation */
   private runMutation(){
     this.addJobService.createNewJob(this.addForm.value)
     .subscribe(
       ()=>{
        // TO DO, RESET FORM, MAYBE REDIRECT
        this.didFail = false
       },
      ()=>{
        this.didFail = true
      }
      );

   }
  }