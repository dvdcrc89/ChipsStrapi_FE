import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { AuthService } from '../service/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private authService: AuthService) { }


  load(){
    return this.authService.user
  }

  
}
