import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BusinessComponent } from './business/business.component';
import { RestaurantComponent } from './UI/restaurant/restaurant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileUIComponent } from './UI/user-profile-ui/user-profile-ui.component';
import { AvatarModule } from 'ngx-avatar';
import {MatTabsModule} from '@angular/material/tabs';
import { JobCardActionComponent } from './UI/job-card-action/job-card-action.component';
import { ApplicantsComponent } from './UI/applicants/applicants.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProfileComponent, BusinessComponent, RestaurantComponent, UserProfileComponent, UserProfileUIComponent, JobCardActionComponent, ApplicantsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatTabsModule,
    FontAwesomeModule,
    AvatarModule.forRoot()
  ]
})
export class ProfileModule { }
