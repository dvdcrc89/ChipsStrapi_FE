import { Component, OnInit } from '@angular/core';
import { STATUS } from '../class/UserWrapper';
import {NavbarService} from './navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }
  public isMenuOpen = false;
  public profilePic = ''
  public visible = true;
  public userType: STATUS;
  public navLinks: Array<{text: string, ref: string}> = []
  public userTypes = STATUS



  /********** MAYBE TO MOVE THIS ON BACKEND ***********/
  BUSINESS = [
    {text: 'Jobs Market', ref: '/jobs'},
    {text: 'Profile', ref: '/profile/business'},
    {text: 'Add Job', ref: '/addJob'},
  ]

  USER = [
    {text: 'Jobs Market', ref: '/jobs'},
    {text: 'Profile', ref: '/profile/me'},
  ]

  GUEST = [
    {text: 'Job Seeker', ref: '/auth/user'},
    {text: 'Business', ref: '/auth/business/signin'},
  ]

  ngOnInit(): void {
    this.navbarService.load().subscribe((user)=>{
      console.log(user);
      this.userType = user ? user.status : STATUS.GUEST
      console.log(this.userType);
      switch(this.userType){
        case STATUS.BUSINESS_USER: this.navLinks = this.BUSINESS;
                                    break;
        case STATUS.BASIC_USER: this.navLinks = this.USER;
                                    break;
        default:                 this.navLinks = this.GUEST;
                                    break;
      }
    })
  }


  public openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}

