import { Component, Input, OnInit } from '@angular/core';
import { JobsApplications } from 'src/types/schema';

@Component({
  selector: 'applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {

  @Input()
  application: JobsApplications
  constructor() { }

  ngOnInit(): void {
  }

}
