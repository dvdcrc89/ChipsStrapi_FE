import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BusinessComponent } from './business/business.component';
import { RestaurantComponent } from './UI/restaurant/restaurant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileUIComponent } from './UI/user-profile-ui/user-profile-ui.component';


@NgModule({
  declarations: [ProfileComponent, BusinessComponent, RestaurantComponent, UserProfileComponent, UserProfileUIComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
