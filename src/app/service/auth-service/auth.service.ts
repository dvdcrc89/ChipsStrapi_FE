import {Injectable} from '@angular/core';
import {GC_AUTH_TOKEN, GC_USER_ID} from './constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Maybe, UsersPermissionsUser } from 'src/types/schema';

export type User = {
  username?: string,
  email: string,
  name?: string,
  basic_user?: string,
  business_user?:string,
}

// 1
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  // 2
  private userId: string = null;

  public _user: BehaviorSubject<Maybe<User>> = new BehaviorSubject(null);

  public jwt: BehaviorSubject<string> = new BehaviorSubject(null);

  private _isAuthenticated = new BehaviorSubject(false);

  public didFail: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  // 4
  get isAuthenticated(): BehaviorSubject<boolean> {
    return this._isAuthenticated;
  }

  set currentUser(user: Maybe<User>) {
    console.log(user);
    //@ts-ignore 
    this._user.next(user);
  }

  get user(): BehaviorSubject<Maybe<User>>  { return this._user }

  // 5
  saveUserData(id: string, token: string) {

    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.setUserData(id, token);
  }

  // 6
  setUserData(id: string, jwt: string) {
    this.userId = id;
    this.jwt.next(jwt);
    this._isAuthenticated.next(true);
    this.didFail.next(false);
  }

  // 7
  logout() {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.userId = null;
    this.currentUser = null;
    this.jwt.next(null)
    this._isAuthenticated.next(false);
  }

  // 8
  autoLogin() {
    const id = localStorage.getItem(GC_USER_ID);
    const jwt = localStorage.getItem(GC_AUTH_TOKEN);
    if (id && jwt) {
      this.getProfile(jwt)
      .subscribe((user: Maybe<User>,...rest) => {
        console.log(user);
        if(!user) {
          throw new Error('User not found');
        }
        
        this.currentUser = user;
        this.setUserData(id, jwt);
      },
      (err)=>{
        console.log(err);
        this.didFail.next(true);
        this.logout();
      })
      
    }
  }

  getProfile(jwt: string){
    return this.http.get(`${environment.url}/users/me`, {headers: {'Authorization': `Bearer ${jwt}`}});
  }

  googleAuth(){
    window.location.href = `${environment.url}/connect/google`;
  }

  facebookAuth(){
    window.location.href = `${environment.url}/connect/facebook`;
  }

  googleAuthCallback(params: Params): Observable<any>{
    const opts = { params: new HttpParams({fromObject: params}) }
    return this.http.get(`${environment.url}/auth/google/callback`,opts)
  }

  facebookAuthCallback(params: Params): Observable<any>{
    console.log('callback')
    const opts = { params: new HttpParams({fromObject: params}) }
    return this.http.get(`${environment.url}/auth/facebook/callback`,opts)
  }

  registerRestaurant({place, email, password}){
    this.http.post(`${environment.url}/auth/local/register`, {place, email, password})
    .subscribe(({user, jwt}:any) => {
      this.saveUserData(user.id, jwt);
      this.currentUser = user;
    },
    error => {
      // Handle error.
      this.didFail.next(true);
      console.log('An error occurred:', error.response);
    })
  }

  restaurantLogin({email: identifier, password}: {email: string, password: string}){
    this.http.post(`${environment.url}/auth/local`, {identifier, password})
    .subscribe(({user, jwt}: any)=>{
      this.saveUserData(user.id, jwt);
      this.currentUser = user;
      this.router.navigate(['/profile/business']);
    },
    error => {
      // Handle error.
      this.didFail.next(true);
      console.log('An error occurred:', error.response);
    })
  }
}
