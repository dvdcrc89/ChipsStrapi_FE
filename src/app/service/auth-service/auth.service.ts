import {Injectable} from '@angular/core';
import {GC_AUTH_TOKEN, GC_USER_ID} from './constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';

// 1
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  // 2
  private userId: string = null;

  public _user = new BehaviorSubject(null);

  public jwt: BehaviorSubject<string> = new BehaviorSubject(null);

  // 3
  private _isAuthenticated = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  // 4
  get isAuthenticated(): BehaviorSubject<boolean> {
    return this._isAuthenticated;
  }

  set currentUser(user: any) {
    this._user.next(user);
  }

  get user(): Observable<any> { return this._user.asObservable() }

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
  }

  // 7
  logout() {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.userId = null;
    this._user.next(null);
    this.jwt.next(null)
    this._isAuthenticated.next(false);
  }

  // 8
  autoLogin() {
    const id = localStorage.getItem(GC_USER_ID);
    const jwt = localStorage.getItem(GC_AUTH_TOKEN);
    if (id) {
      this.setUserData(id, jwt);
    }
  }

  googleAuth(){
    window.location.href = 'http://localhost:1337/connect/google?callback="http://localhost:4200/auth"';
  }

  googleAuthCallback(params: Params): Observable<any>{
    const opts = { params: new HttpParams({fromObject: params}) }
    return this.http.get('http://localhost:1337/auth/google/callback',opts)
  }
}