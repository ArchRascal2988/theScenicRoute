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
  geometry:[String]!
  description:String
  difficultyLevel:Int!
  votes:Int
  userId:User!
  tags:[Tag]
  notes:[Note]
}

type Note {
  notepoints:[String]
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
        name: String!,
        email: String!,
        password: String!
        ): Auth
    login(
        username: String!,
        password: String!
        ): Auth
    addRoute(
      geometry: [String]!
      description: String!
      difficultyLevel: Number!
      notes: [Note]
      tags: [Tag]
      ): Auth
    addNote(
      id: Number!
      notepoints: [String]!
      image: String
      content: String!
      ): Auth
    addTag(
      tagName: String!
    )

}
`;
//NOTE: I'm not totally sure if thats how  the query should look for user query context
//we need to add more  queries and mutations


module.exports= typeDefs;
