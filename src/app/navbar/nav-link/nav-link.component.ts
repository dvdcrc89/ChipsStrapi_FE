import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input()
  link: {
    text: string,
    ref: string
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
