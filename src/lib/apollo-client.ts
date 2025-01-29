import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.EXPO_PUBLIC_HASURA_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET
  }
});

export const client = new ApolloClient({ link, cache: new InMemoryCache() });
