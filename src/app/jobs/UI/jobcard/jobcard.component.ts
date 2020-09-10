import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from 'src/types/schema';


@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  @Input()
  job: Jobs;
   
  constructor() { }

  ngOnInit(): void {
  }

}
