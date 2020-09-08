import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-business-signup',
  templateUrl: './business-signup.component.html',
  styleUrls: ['./business-signup.component.scss'],
})
export class BusinessSignupComponent implements OnInit {
  confirmUser = false;
  isBusinessConfirmed = false;
  didFail = false;
  isLoading = false;
  usrForm: FormGroup;
  bsnForm: FormGroup;

  placeSelected: boolean;
  brightonFirst = new google.maps.LatLngBounds(
    new google.maps.LatLng(50.837397, -0.1762297),
    new google.maps.LatLng(50.837397, -0.1762297)
  );

  options = {
    bounds: this.brightonFirst,
    types: ['establishment'],
    componentRestrictions: {
      country: 'UK',
    },
  };

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  openDialog(place: any) {
    const dialogRef = this.dialog.open(BusinessConfirmationDialogComponent, {
      data: {
        name: place.name,
        address: place.formatted_address,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bsnForm.controls.place.disable();
        this.setBusinessFormValues(place);
      }
      return;
    });
  }

  setBusinessFormValues(e) {
    const {
      formatted_address,
      name,
      website,
      international_phone_number,
      geometry,
    } = e;
    const lat = geometry.location.lat();
    const lng = geometry.location.lng();
    this.bsnForm.setValue({
      place: name,
      name,
      address: formatted_address,
      lat,
      lng,
      phone: international_phone_number,
      website,
    });
  }

  ngOnInit(): void {
    this.usrForm = this.fb.group(
      {
        email: ['', Validators.email],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordConfirming }
    );

    this.bsnForm = this.fb.group({
      place: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      phone: [''],
      website: [''],
    });

    this.bsnForm.valueChanges.subscribe((val) => console.log(this.bsnForm));
  }

  onSubmit() {
    if (this.bsnForm.invalid && this.usrForm.invalid) {
      return;
    }
    // I am sure there is a much more elegant way to do this...
    const userValues = this.usrForm.value;
    const businessValues = this.bsnForm.value;
    const place = {
      name: businessValues.name,
      address: businessValues.address,
      lat: businessValues.lat,
      lng: businessValues.lng,
      phone: businessValues.phone,
      website: businessValues.website,
    };
    const formValues = {
      place,
      email: userValues.email,
      password: userValues.password,
    };
    console.log(formValues);
    this.authService.registerRestaurant(formValues);
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  modifyBusiness() {
    this.bsnForm.controls.place.enable();
    this.bsnForm.reset();
  }
}

@Component({
  templateUrl: 'business-confirmation-dialog.html',
  styleUrls: ['./business-signup.component.scss'],
})
export class BusinessConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BusinessConfirmationDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
