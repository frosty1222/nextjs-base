import { gql } from '@apollo/client';

export const GET_MENU = gql`
  query NewQuery {
    menus {
      edges {
        node {
          id
          name
          slug
          menuItems {
            nodes {
              url
              title
              path
              label
              childItems {
                nodes {
                  title
                  url
                  label
                  description
                  megaMenu {
                    icon {
                      node {
                        altText
                        mediaItemUrl
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
