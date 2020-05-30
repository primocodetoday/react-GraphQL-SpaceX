import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Card, Typography, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import MissionLinks from '../components/molecules/MissionLinks';
import { GET_MISSION_BYID } from '../graphql/get-mission-byId';
import spaceX from '../assets/spacex_wall.webp';

const StyledWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const BottomSection = styled(Grid)`
  padding: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const BadgeSection = styled.section`
  padding: 20px;
  width: 230px;
  flex-shrink: 0;

  img {
    width: 100%;
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 900px) {
    align-items: center;

    p,
    h4 {
      text-align: center;
    }
  }
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
      <TopSection>
        <BadgeSection>
          {links && (
            <img
              src={links.mission_patch_small || spaceX}
              alt="mission badge"
            />
          )}
        </BadgeSection>
        <InfoSection>
          <Typography variant="h4" component="h4" paragraph>
            Mission: {missionName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="p">
            Rocket: <strong>{rocket && rocket.rocket_name}</strong>
          </Typography>
          <Typography gutterBottom component="p" paragraph>
            Launch:
            <strong>{` ${moment
              .utc(launchDateUtc)
              .format('YYYY Do MMMM, h:mm:ss a')} UTC`}</strong>
          </Typography>
          <Typography
            align="justify"
            gutterBottom
            component="article"
            paragraph
          >
            Info: {details || `SpaceX has not yet completed this information`}
          </Typography>
          {links && <MissionLinks links={links} />}
        </InfoSection>
      </TopSection>
      <BottomSection container justify="center" spacing={3}>
        {links &&
          links.flickr_images.map((image) => (
            <Grid item md={6} xs={12} key={image}>
              <img src={image} alt="launch" />
            </Grid>
          ))}
      </BottomSection>
    </StyledWrapper>
  );
};

export default MissionTemplate;
