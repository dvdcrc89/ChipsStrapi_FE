import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';

const routes: Routes = [
  { path: 'business', component: BusinessProfileComponent },
  { path: 'personal', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
