import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
     $username: String!,
     $email: String!, $password: String!) {
    addUser(
      username: $username,
      email: $email,
      password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ROUTE = gql`
mutation Mutation($userId: String!, $geometry: [[Float]]!, $description: String!, $title: String!, $difficultyLevel: Int!, $tags: String) {
  addRoute(userId: $userId, geometry: $geometry, description: $description, title: $title, difficultyLevel: $difficultyLevel, tags: $tags) {
    _id
    geometry
    difficultyLevel
    description
    title
    votes
    userId
    tags
  }
}
`;

export const ADD_NOTE = gql`
mutation addNote(
      $routePoints: [Int],
      $image: String,
      $content: String!,
      $routeId: String!,
      ){
        addNote(
      routePoints: $Int,
      image: $String,
      content: $String,
      routeId: $String,
        ){
            notes{
              _id
              routePoints
              image
              content
              routeId
            }
          }
        }
`;

export const UPVOTE =  gql`
mutation upVote($routeId: String!){
  upVote(routeId: $String){
    votes
  }
}
`

export const DOWNVOTE =  gql`
mutation downVote($routeId: String!){
  upVote(routeId: $String){
    votes
  }
}
`

export const REMOVE_NOTE = gql`
mutation removeNote(
  $noteId: String
      ){
        removeNote(
          noteId: $String
        ){
            notes{
              _id
              routePoints
              image
              content
              routeId
            }
          }
        }
`;

// export const REMOVE_ROUTE = gql`
// mutation removeRoute(
//   $routeId: String!
//       ){
//         removeRoute(
//           routeId: $String
//         ){
//           routes{
//             _id
//           }
//         }
// `;
