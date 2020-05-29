import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';
import { GET_INCOMING_MISSIONS } from '../graphql/get-incoming-missions';
import MissionCard from '../components/molecules/MissionCard';

const IncomingMissions = () => {
  const { data: { launchesUpcoming = [] } = {} } = useQuery(
    GET_INCOMING_MISSIONS,
    {
      variables: { limit: 12 },
    },
  );

  return (
    <Grid container spacing={4} direction="row" justify="center">
      {launchesUpcoming &&
        launchesUpcoming.map((launch) => (
          <MissionCard key={launch.id} launch={launch} />
        ))}
    </Grid>
  );
};

export default IncomingMissions;
