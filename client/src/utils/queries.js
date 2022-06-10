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
query Query($userId: ID!) {
  user(id: $userId) {
    username
    email
    password
  }
}
`;

//this is for the homepage map...
export const QUERY_ROUTES = gql`
    query allRoutes{
        routes {
        _id
        geometry
        description
        title
        votes
        userId
    }
  }
`;

export const QUERY_SINGLE_ROUTE = gql`
query Query($singleRouteId: ID!) {
  singleRoute(id: $singleRouteId) {
    _id
    geometry
    description
    difficultyLevel
    title
    votes
    userId
    tags
    notes {
      routePoints
      image
      content
    }
  }
}
`

export const QUERY_USER_ROUTES = gql`
    query userRoutes($userId: ID){
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

