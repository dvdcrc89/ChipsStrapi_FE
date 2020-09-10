import { Component, OnInit, Input } from '@angular/core';
import { IJob } from '../jobcard/jobcard.component';

export interface IGraphQLJobsList {
  data: { jobs: IJob[] },
  loading: boolean,
  networkStatus: number,
  stale: boolean
}

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input()
  jobsList: IGraphQLJobsList;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>console.log(this.jobsList.data.jobs),4000)
  }

}
