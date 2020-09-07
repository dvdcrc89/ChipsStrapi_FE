import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth-service/auth.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit() {
    this.authService.autoLogin();
    this.authService.isAuthenticated
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

  logout(){
    this.authService.logout();
  }
}
