import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  googleAuth(){
    return this.authService.googleAuth();
  }
}
