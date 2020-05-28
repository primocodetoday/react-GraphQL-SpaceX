import gql from 'graphql-tag';

export const GET_PAST_MISSIONS = gql`
  query launchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      details
      launch_date_unix
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_success
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
