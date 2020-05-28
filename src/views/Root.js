import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PastMissions from './PastMissions';
import IncomingMissions from './IncomingMissions';
import MissionTemplate from '../templates/MissionTemplate';

const Root = () => {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/pastmissions" />}
          />
          <Route exact path="/pastmissions" component={PastMissions} />
          <Route path="/mission:id" component={MissionTemplate} />
          <Route path="/incomingmissions" component={IncomingMissions} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Root;
