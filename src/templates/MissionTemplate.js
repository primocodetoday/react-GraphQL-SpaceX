import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_MISSION_BYID } from '../graphql/get-mission-byId';

const StyledWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Badge = styled.img`
  max-width: 200px;
  height: auto;
  padding: 20px;
`;

const MissionTemplate = (ownProps) => {
  const { id } = ownProps.match.params;

  const { data: { launch = {} } = {} } = useQuery(GET_MISSION_BYID, {
    variables: { id },
  });

  const {
    mission_name: missionName,
    rocket,
    links,
    details,
    launch_date_utc: launchDateUtc,
  } = launch;

  return (
    <StyledWrapper>
      <Badge src={links && links.mission_patch_small} alt="mission badge" />
      <Typography variant="h4" component="h4">
        Mission: {missionName}
      </Typography>
      <Typography gutterBottom>
        Rocket: {rocket && rocket.rocket_name}
      </Typography>
      <Typography gutterBottom>
        Launch: {moment(launchDateUtc).format('MMMM Do YYYY, h:mm:ss a')}
      </Typography>
      <Typography gutterBottom>{details}</Typography>
    </StyledWrapper>
  );
};

export default MissionTemplate;
