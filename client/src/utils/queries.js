import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      routes {
        geometry
        description
        difficultyLevel
        title
        votes
        userId
        tags
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      routes {
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
`;

export const QUERY_ROUTES = gql`
    {
        routes{
            description
        }
  }
`;

export const QUERY_SINGLE_ROUTE = gql`
    query getSingleRoutes($routeId: ID){
        route(routeId: $routeId){
            _id
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
`

export const QUERY_USER_ROUTES = gql`
    query getUserRoutes($userId: ID){
        userRoute(userId: $userId){
            _id
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
`

