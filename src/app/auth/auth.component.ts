import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from '../service/auth-service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }
  public loading = false;
  private validProvider = ['facebook', 'google'];
  private paramMap$: Subscription;
  private queryParam$: Subscription;

  ngOnInit() {
    this.paramMap$ = this.route.paramMap.subscribe(params => {
      const provider = params.get('provider');
      this.queryParam$ = this.validProvider.includes(provider) && this.callback(provider)
    })
  }

  callback(provider: string){
    return this.route.queryParams.pipe(
      filter(params => params.id_token || params.access_token),
      switchMap(
        params => {
          this.loading = true;
          console.log(provider);
          return provider === 'google' ? this.authService.googleAuthCallback(params) : this.authService.facebookAuthCallback(params)
        }
      ),
    )
    .subscribe(({user, jwt}) => {
      console.log(user);
      if(user && jwt){
        this.authService.saveUserData(user.id, jwt);
        this.authService.currentUser = user;
        this.loading = false;
        this.router.navigate(['/jobs'])
      }
    })
  }

  ngOnDestroy(): void {
    this.paramMap$ && this.paramMap$.unsubscribe();
    this.queryParam$ && this.queryParam$.unsubscribe();

  }
}
