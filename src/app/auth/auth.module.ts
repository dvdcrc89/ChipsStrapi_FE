import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './user/signin/signin.component';


@NgModule({
  declarations: [AuthComponent, SigninComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: []
})
export class AuthModule { }
