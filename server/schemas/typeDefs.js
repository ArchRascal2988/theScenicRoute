const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  username:String!
  password:String!
  email:String!
  routes:[Route]
  userLocation:String
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
  tags:[Tag]
  notes:[Note]
}

type Note {
  routePoints:[String]
  image:String
  content:String!
  routeId:Route!
}

type Tag {
  tagName:String
}

type Query {
    users: [User]!
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
      ): User
    addNote(
      routePoints: Int!
      image: String
      content: String!
      routeId: String!
      ): Route
    # addTag(
    #   tagName: [String]!
    # ): Route
}
`;
//NOTE: I'm not totally sure if thats how  the query should look for user query context
//we need to add more  queries and mutations


module.exports= typeDefs;
