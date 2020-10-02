import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'job-paginator',
  templateUrl: './job-paginator.component.html',
  styleUrls: ['./job-paginator.component.scss']
})
export class JobPaginatorComponent implements OnInit {
  @Input()
  public totalItems$: Observable<number>;

  @Input()
  public itemPerPage: number;

  @Input()
  public currentPage: number;

  @Output()
  public pageEmitter: EventEmitter<number> = new EventEmitter();

  public totalPages: number

  public totalPagesArray: number[];

  public totalItems_sub$: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.totalItems_sub$ = this.totalItems$.subscribe(
      totalItems => {
        console.log(totalItems);
        this.totalPages = Math.ceil(totalItems / this.itemPerPage);
        this.totalPagesArray = [...Array(this.totalPages).keys()]
      }
    )

  }

  changePage(page: number){
    this.currentPage = page;
    this.pageEmitter.emit(page);
  }

  ngOnDestroy(): void {
   this.totalItems_sub$.unsubscribe();
  }
}
