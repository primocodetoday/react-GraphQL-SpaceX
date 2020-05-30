import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import spaceX from '../../assets/spacex_wall.webp';

const StyledCardMedia = styled(CardMedia)`
  background-color: black;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const MissionCard = ({ launch }) => {
  const {
    id,
    mission_name: missionName,
    rocket,
    links,
    // details,
    launch_date_utc: launchDateUtc,
  } = launch;

  const [isRedirect, setRedirect] = useState({ redirect: false });

  const handleClick = () => setRedirect({ redirect: true });

  // przekierowanie na stronę przedmiotu
  if (isRedirect.redirect) {
    return <Redirect push to={`/mission/${id}`} />;
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea onClick={handleClick}>
          <StyledCardMedia
            image={links.flickr_images[0] || spaceX}
            title={missionName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {missionName.length > 25
                ? `${missionName.substring(0, 25)}...`
                : missionName}
            </Typography>
            <Typography variant="body1" color="primary" component="p">
              Rocket: {rocket.rocket_name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Launch: {moment.utc(launchDateUtc).startOf('hour').fromNow()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {links.article_link && (
            <Button color="primary" target="_blank" href={links.article_link}>
              Article
            </Button>
          )}
          {links.video_link && (
            <Button color="primary" target="_blank" href={links.video_link}>
              Video
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

MissionCard.propTypes = {
  launch: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MissionCard;
