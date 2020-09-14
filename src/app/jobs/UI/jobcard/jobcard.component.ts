import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Jobs } from 'src/types/schema';




@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  @Input()
  job: Jobs;
  
  @Input()
  applied: boolean; 

  @Output()
  toggleEmitter: EventEmitter<string> = new EventEmitter()

  constructor(
    ) { }

  ngOnInit(): void {
  }

  toggleJob(){
    this.toggleEmitter.emit(this.job.id);
  }

   
}
