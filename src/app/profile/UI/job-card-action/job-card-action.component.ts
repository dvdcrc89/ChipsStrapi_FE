import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jobs } from 'src/types/schema';

@Component({
  selector: 'job-card-action',
  templateUrl: './job-card-action.component.html',
  styleUrls: ['./job-card-action.component.scss']
})
export class JobCardActionComponent implements OnInit {
  @Input()
  job: Jobs;
  @Output()
  applicants: EventEmitter<Jobs> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seeApplicants(){
    this.applicants.emit(this.job);
  }
}
