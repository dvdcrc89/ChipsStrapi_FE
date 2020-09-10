import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobsWithCount } from '../../jobs.component';

export interface IGraphQLJobsList {
  data: JobsWithCount,
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

  @Input()
  itemPerPage: number;

  @Input()
  currentPage: number;
  
  @Output()
  pageEmitter: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  changePage(page: number){
    this.pageEmitter.emit(page);
  }

}
