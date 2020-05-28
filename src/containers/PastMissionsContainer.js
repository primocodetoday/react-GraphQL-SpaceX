import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';
import { GET_PAST_MISSIONS } from '../graphql/get-past-missions';
import MissionCard from '../components/molecules/MissionCard';

const PastMissionsContainer = () => {
  const { data: { launchesPast = [] } = {} } = useQuery(GET_PAST_MISSIONS, {
    variables: { limit: 12 },
  });

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      {launchesPast &&
        launchesPast.map((launch) => (
          <MissionCard key={launch.id} launch={launch} />
        ))}
    </Grid>
  );
};

export default PastMissionsContainer;
