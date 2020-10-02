import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { BusinessComponent } from './business/business.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'business/applicants/:id', component: BusinessComponent },
  { path: 'me', component: UserProfileComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
