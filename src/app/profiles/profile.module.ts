import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BusinessUserProfileUIComponent } from './UI/business-user-profile/business-user-profile-component';
import { PersonalUserProfileUIComponent } from './UI/personal-user-profile/personal-user-profile-component';


@NgModule({
  declarations: [
    BusinessProfileComponent,
    UserProfileComponent,
    BusinessUserProfileUIComponent,
    PersonalUserProfileUIComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
