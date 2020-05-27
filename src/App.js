import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import MissionsContainer from './containers/MissionsContainer';
import './App.css';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <MissionsContainer />
      </main>
    </ApolloProvider>
  );
};

export default App;
