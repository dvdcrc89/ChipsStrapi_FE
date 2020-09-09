import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-signin',
  templateUrl: './business-signin.component.html',
  styleUrls: ['./business-signin.component.scss']
})
export class BusinessSigninComponent implements OnInit {
  usrForm: FormGroup;
  didFail: boolean;
  didFail$: Subscription;

  constructor(private authService: AuthService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.didFail$ = this.authService.didFail.pipe(
      distinctUntilChanged()
    )
    .subscribe((value)=>{
      this.didFail = value
    });
    
    this.usrForm = this.fb.group(
      {
        email:    ['', Validators.email],
        password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
      },
    );
  }

  onSubmit(){
    const {email, password} = this.usrForm.value;
    this.authService.restaurantLogin({email, password});
  }

  ngOnDestroy(): void {
    this.didFail$.unsubscribe();
    
  }

}
