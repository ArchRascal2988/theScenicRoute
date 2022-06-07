import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      Route {
        geometry
        description
        difficultyLevel
        title
        votes
        userId
        tags
        notes
      }
    }
}
`

