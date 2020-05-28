import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import moment from 'moment';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

const MissionCard = ({ launch }) => {
  const {
    mission_name: missionName,
    rocket,
    links,
    // details,
    launch_date_utc: launchDateUtc,
  } = launch;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={links.flickr_images[0]}
            title={missionName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {missionName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rocket: {rocket.rocket_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Launch: {moment(launchDateUtc).startOf('day').fromNow()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Article
          </Button>
          <Button size="small" color="primary">
            Video
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

MissionCard.propTypes = {
  launch: PropTypes.objectOf(PropTypes.any).isRequired,
  mission_name: PropTypes.string.isRequired,
};

export default MissionCard;
