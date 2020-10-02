import { Component, OnInit, Input } from '@angular/core';
import { Jobs, Maybe, Restaurant } from 'src/types/schema';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent implements OnInit {
  @Input()
  businessUser: Restaurant;

  showApplicants: Maybe<Jobs>

  faArrowLeft = faArrowLeft
  constructor() { }

  ngOnInit(): void {
  }

  seeApplicants(job: Jobs){
    this.showApplicants = job;
  }

  back() {
    this.showApplicants = null;
  }
}
