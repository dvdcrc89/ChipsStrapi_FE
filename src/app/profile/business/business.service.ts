import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from 'src/types/schema';
import { GET_RESTAURANT_QUERY } from './business.query';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private apollo: Apollo) { }


  public getRestaurant(id: string): Observable<ApolloQueryResult<Restaurant>> {
    return this.apollo
            .watchQuery<any>({
              query: GET_RESTAURANT_QUERY,
              variables:{
                id
              }
            }).valueChanges.pipe(map(({data})=> data.businessUser.restaurant));
   }
}
