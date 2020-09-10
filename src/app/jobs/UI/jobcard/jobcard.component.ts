import { Component, OnInit, Input } from '@angular/core';

export interface IJob {
  Type: string,
  UID: string,
  description: string,
  payPerHour: number,
  position: string,
  restaurant: {
    name: string,
    latitude: number,
    longitude: number,
    address: string,
    
  }
  shift_date: {
    date: {
      Date: string,
      StartAt: string,
      EndAt: string
    }[]
  }
}
@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  @Input()
  job: IJob;
   
  constructor() { }

  ngOnInit(): void {
  }

}
