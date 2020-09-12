import { Component, OnInit, Input } from '@angular/core';

export interface BusinessUser {
  business_user: {
    restaurant: {
      name: string,
      website: string,
      latitude: number,
      longitude: number,
      address: string,
    }
  }
}

@Component({
  selector: 'app-business-user-profile-component',
  templateUrl: './business-user-profile-component.html',
  styleUrls: ['./business-user-profile-component.scss']
})
export class BusinessUserProfileUIComponent implements OnInit {
  @Input()
  businessProfile: BusinessUser;

  constructor() { }

  ngOnInit(): void {
  }

}
