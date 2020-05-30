import gql from 'graphql-tag';

export const GET_MISSION_BYID = gql`
  query getLaunch($id: ID!) {
    launch(id: $id) {
      details
      launch_date_utc
      links {
        article_link
        mission_patch_small
        reddit_campaign
        video_link
        wikipedia
        flickr_images
      }
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
