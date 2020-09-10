import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job-map',
  templateUrl: './job-map.component.html',
  styleUrls: ['./job-map.component.scss']
})
export class JobMapComponent implements OnInit {
  @Input()
  latitude: number;
  @Input()
  longitude: number;
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
