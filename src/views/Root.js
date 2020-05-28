import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Container } from '@material-ui/core';
import MissionsContainer from '../containers/MissionsContainer';

const Root = () => {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <Container>
        <MissionsContainer />
      </Container>
    </ApolloProvider>
  );
};

export default Root;
