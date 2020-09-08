import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SigninComponent } from './user/signin/signin.component';
import { BusinessSignupComponent } from './business/business-signup/business-signup.component';
import { BusinessSigninComponent } from './business/business-signin/business-signin.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'callback/:provider', component: AuthComponent },
  { path: 'user', component: SigninComponent },
  { path: 'business/signup', component: BusinessSignupComponent},
  { path: 'business/signin', component: BusinessSigninComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
