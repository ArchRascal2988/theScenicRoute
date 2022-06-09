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
  _id: ID
  geometry:[[Float]]!
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
    userRoutes(user: ID!): User
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
      geometry: [[String]]!
      description: String!
      title: String
      difficultyLevel: Int!
      tags: String
      ): User
    addNote(
      routePoints: [Int]
      image: String
      content: String!
      routeId: String!
      ): Route
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
