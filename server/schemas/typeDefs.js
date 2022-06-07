const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  username:String!
  password:String!
  email:String!
  routes:[Route]
}

type Auth {
    token: ID!
    user: User
}

type Route {
  geometry:[Int]!
  description:String
  difficultyLevel:Int!
  votes:Int
  userId:String!
  tags:[Int]
  notes:[Note]
}

type Note {
  routePoints: [Int]
  image:String
  content:String!
  routeId:Route!
}



type Query {
    # users: [User]!
    user(userId: ID!):User
    me: User
    routes:[Route]
    singleRoute(singleRoute: ID!): Route
}

type Mutation {
    addUser(
        username: String!,
        email: String!,
        password: String!
        ): Auth
    login(
        username: String!,
        password: String!
        ): Auth
    addRoute(
      userId: String!
      geometry: [Int]!
      description: String!
      difficultyLevel: Int!
      tags: [String]
      ): User
    addNote(
      routePoints: [Int]
      image: String
      content: String!
      routeId: String!
      ): Route
    addTag(
      tagName: [String]!
    ): Route
    upVote(
      routeId: String!, 
      routeVote: Int!
      ): Route
      downVote(
        routeId: String!, 
        routeVote: Int!
        ): Route
}
`;
//NOTE: I'm not totally sure if thats how  the query should look for user query context
//we need to add more  queries and mutations


module.exports = typeDefs;
