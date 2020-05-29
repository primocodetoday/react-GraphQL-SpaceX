import gql from 'graphql-tag';

export const GET_INCOMING_MISSIONS = gql`
  query getUpcoming($limit: Int!) {
    launchesUpcoming(limit: $limit) {
      id
      mission_name
      launch_date_utc
      links {
        flickr_images
        mission_patch_small
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;
