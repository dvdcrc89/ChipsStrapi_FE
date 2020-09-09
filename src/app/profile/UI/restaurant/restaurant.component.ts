import { Component, OnInit, Input } from '@angular/core';

export interface IBusinessUser {
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
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent implements OnInit {
  @Input()
  businessUser: IBusinessUser;

  constructor() { }

  ngOnInit(): void {
  }

}
