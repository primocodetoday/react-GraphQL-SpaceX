import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { GET_MISSIONS } from '../graphql/get-missions';
import MissionCard from '../components/molecules/MissionCard';
import Logo from '../components/atoms/Logo';

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const MissionsContainer = () => {
  const { data: { launchesPast = [] } = {} } = useQuery(GET_MISSIONS, {
    variables: { limit: 12 },
  });

  return (
    <StyledWrapper>
      <Logo />
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
    </StyledWrapper>
  );
};

export default MissionsContainer;
