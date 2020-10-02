import { AbstractControl, ValidationErrors } from '@angular/forms'
import { CreateShiftDatePayload } from 'src/types/schema'

export type ShiftDateGroup = {
    Date:     (string | ((control: AbstractControl) => ValidationErrors))[],
    StartAt:  (string | ((control: AbstractControl) => ValidationErrors))[],
    EndAt:    (string | ((control: AbstractControl) => ValidationErrors))[]
  }

  export type CreateShiftDateWithPayload = {
      createShiftDate: CreateShiftDatePayload
  }