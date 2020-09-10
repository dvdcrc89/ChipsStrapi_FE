import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'job-paginator',
  templateUrl: './job-paginator.component.html',
  styleUrls: ['./job-paginator.component.scss']
})
export class JobPaginatorComponent implements OnInit {
  @Input()
  totalItems: number;
  
  @Input()
  itemPerPage: number;
  
  @Input()
  currentPage: number;
  
  @Output()
  pageEmitter: EventEmitter<number> = new EventEmitter();

  totalPages: number
  
  totalPagesArray: number[];

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemPerPage);
    this.totalPagesArray = [...Array(this.totalPages).keys()]
    console.log(this.totalPages,this.totalPagesArray,this.totalItems,this.itemPerPage);
  }

  changePage(page: number){
    this.currentPage = page;
    this.pageEmitter.emit(page);
  }
}
