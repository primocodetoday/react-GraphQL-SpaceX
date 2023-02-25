import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PastMissions from './PastMissions';
import IncomingMissions from './IncomingMissions';
import MissionTemplate from '../templates/MissionTemplate';
import MainTemplate from '../templates/MainTemplate';

const Root = () => {
  const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/pastmissions" />}
            />
            <Route path="/pastmissions" component={PastMissions} />
            <Route path="/mission/:id" component={MissionTemplate} />
            <Route path="/incomingmissions" component={IncomingMissions} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Root;
