import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './user/signin/signin.component';
import { BusinessSigninComponent } from './business/business-signin/business-signin.component';
import { BusinessSignupComponent, BusinessConfirmationDialogComponent } from './business/business-signup/business-signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [AuthComponent, SigninComponent, BusinessSigninComponent, BusinessSignupComponent, BusinessConfirmationDialogComponent],
  imports: [
    MatIconModule,
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
    GooglePlaceModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class AuthModule { }
