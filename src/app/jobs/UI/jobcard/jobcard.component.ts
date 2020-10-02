import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { faAngleDown, faAngleUp, faCalendar, faClock, faCoffee, faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { Jobs } from 'src/types/schema';

@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  faCoffee = faCoffee;
  faPoundSign = faPoundSign
  faClock = faClock
  faCalendar = faCalendar
  faAngleUp = faAngleUp
  faAngleDown = faAngleDown
  toggled = false;

  @Input()
  job: Jobs;

  @Input()
  applied: boolean;

  @Output()
  toggleEmitter: EventEmitter<string> = new EventEmitter()

  constructor(
    ) { }

  ngOnInit(): void {
    console.log(this.job, 'job');
  }
  showDate(date) {
    console.log(date);
  }

  toggleJob(){
    this.toggleEmitter.emit(this.job.id);
  }

  toggleShiftsList() {
    this.toggled = !this.toggled;
  }

  get sanitizedName(): string {
    const name = this.job?.restaurant?.name
    return name && name.replace(/\W/g, ' ').split(' ').splice(0,2).join(' ');
  }

}
