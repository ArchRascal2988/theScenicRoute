const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username:String!
  email:String!
  password:String!
  routes:[Route]
}

type Auth {
    token: ID!
    user: User
}

type Route {
  _id: ID!
  geometry:[[Float]]!
  description:String
  difficultyLevel:Int!
  title:String!
  votes:Int
  userId:ID!
  tags:String
  notes:[Note]
}

type Note {
  _id: ID
  routePoints: [Float]
  image:String
  content:String!
  routeId:Route!
}



type Query {
    user(id: ID!): User
    me: User
    routes:[Route]
    singleRoute(id: ID!): Route
    userRoutes(userId: ID!): Route
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
      geometry: [[Float]]!
      description: String!
      title: String!
      difficultyLevel: Int!
      tags: String
      ): Route
    addNote(
      routePoints: [Float]
      image: String
      content: String!
      routeId: String!
      ): Note
    upVote(
      routeId: String!, 
      ): Route
    downVote(
      routeId: String!,
      ): Route
    removeRoute(
      routeId: String!
      ): User
    removeNote(
      noteId: String!
      ): Note  
}
`;



module.exports = typeDefs;
