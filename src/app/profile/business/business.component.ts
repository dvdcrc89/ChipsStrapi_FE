import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Apollo } from 'apollo-angular';
import { filter } from 'rxjs/internal/operators/filter';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { STATUS } from 'src/app/class/UserWrapper';
import { map } from 'rxjs/operators';
import { BusinessService } from './business.service';
import { Restaurant } from 'src/types/schema';



@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessProfile$: Observable<ApolloQueryResult<Restaurant>>

  constructor(
    private authService: AuthService,
    private businessService: BusinessService,
    private router: Router) {}

  ngOnInit(): void {
    this.authService._user.pipe(
      filter(user => !!user),
    )
    .subscribe(
      (user) => {
        const { business_user, status } = user;
          status === STATUS.BASIC_USER && this.router.navigate(['/profile/me'])
          if(status === STATUS.BUSINESS_USER){
            this.businessProfile$ = this.businessService.getRestaurant(business_user);
          }
        }

    )
  }



}
