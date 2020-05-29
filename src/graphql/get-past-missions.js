import gql from 'graphql-tag';

export const GET_PAST_MISSIONS = gql`
  query getPast($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      details
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
