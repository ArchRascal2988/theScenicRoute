const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
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
  _id: ID
  geometry:[String]!
  description:String
  difficultyLevel:Int!
  title:String!
  votes:Int
  userId:String!
  tags:[String]
  notes:[Note]
}

type Note {
  _id: ID
  routePoints: [Int]
  image:String
  content:String!
  routeId:Route!
}



type Query {
    user(username: String!):User
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
      geometry: [String]!
      description: String!
      title: String
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
      votes: Int!
      ): Route
    downVote(
      routeId: String!, 
      votes: Int!
      ): Route
    removeRoute(
      routeId: String!
      ): Route
    removeNote(
      noteId: String!
      ): Note  
}
`;
//NOTE: I'm not totally sure if thats how  the query should look for user query context
//we need to add more  queries and mutations


module.exports = typeDefs;
