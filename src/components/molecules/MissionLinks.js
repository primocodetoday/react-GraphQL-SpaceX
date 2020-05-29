import React from 'react';
import {
  Description as DescriptionIcon,
  YouTube as YouTubeIcon,
  Reddit as RedditIcon,
  MenuBook as MenuBookIcon,
} from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  a,
  div {
    margin: 5px 12px;
  }
`;
const MissionLinks = ({ links }) => (
  <LinksSection>
    {links.article_link && (
      <Chip
        icon={<DescriptionIcon />}
        component="a"
        href={links.article_link}
        label="Article"
        variant="outlined"
        target="_blank"
      />
    )}
    {links.video_link && (
      <Chip
        icon={<YouTubeIcon />}
        component="a"
        href={links.video_link}
        target="_blank"
        label="Video"
        variant="outlined"
      />
    )}
    {links.reddit_campaign && (
      <Chip
        icon={<RedditIcon />}
        component="a"
        href={links.reddit_campaign}
        target="_blank"
        label="Reddit"
        variant="outlined"
      />
    )}
    {links.wikipedia && (
      <Chip
        icon={<MenuBookIcon />}
        component="a"
        href={links.wikipedia}
        target="_blank"
        label="Wikipedia"
        variant="outlined"
      />
    )}
  </LinksSection>
);

MissionLinks.defaultProps = {
  links: {},
};

MissionLinks.propTypes = {
  links: PropTypes.objectOf(PropTypes.any),
};

export default MissionLinks;
