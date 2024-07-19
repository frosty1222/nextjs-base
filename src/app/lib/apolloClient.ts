import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { IncomingMessage } from 'http';

const createApolloClient = (req?: IncomingMessage) => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri:process.env.GRAPHQL_API_URL,
      credentials: 'same-origin',
      headers: {
        cookie: req?.headers.cookie || '',
      },
    }),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState: any = null, req?: IncomingMessage) {
  const apolloClient = createApolloClient(req);

  if (initialState) {
    const existingCache = apolloClient.extract();
    apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  return apolloClient;
}