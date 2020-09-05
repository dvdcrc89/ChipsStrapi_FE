import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from '../service/auth-service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }
  public loading = false;

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.id_token),
      switchMap(
        params => {
          this.loading = true;
          return this.authService.googleAuthCallback(params)
        }
      )
    )
    .subscribe(({user, jwt}) => {
      if(user && jwt){
        this.authService.saveUserData(user.id, jwt);
        this.authService.currentUser = user;
        this.loading = false;
      }
    })
  }

}
