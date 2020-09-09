import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context'
import { GC_AUTH_TOKEN } from './service/auth-service/constants';

const uri = `${environment.url}/graphql`; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const token = localStorage.getItem(GC_AUTH_TOKEN);
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `Bearer ${token}`
    },
  }));

  const link = ApolloLink.from([auth, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
