import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth-service/auth.service';
import { distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService, private apollo: Apollo){}

  ngOnInit() {
    this.authService.autoLogin();
    this.authService.isAuthenticated.pipe(
      distinctUntilChanged()
    )
    .subscribe(isAuthenticated => {
        console.log(`Authenticated: ${isAuthenticated} `)
        this.isAuthenticated = isAuthenticated
    });
    
  }


  go(){
    this.router.navigate(['/auth/user'])
  }

  signup(){
    this.router.navigate(['/auth/business/signup'])
  }

  signin(){
    this.router.navigate(['/auth/business/signin'])
  }

  logout(){
    this.authService.logout();
  }
}


/*
* */