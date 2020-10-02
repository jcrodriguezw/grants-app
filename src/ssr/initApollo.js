import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://grants-backend.herokuapp.com/',
  cache: new InMemoryCache()
});