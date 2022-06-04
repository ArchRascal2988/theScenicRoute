const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id:ID!
  username:String!
  password:String!
  email:String!
}

type Auth {
    token: ID!
    user: User
}

type Route {
  _id:ID!
  geometry:[String]!
  description:String
  difficultyLevel:Int!
  votes:Int
  userId:User!
}

type Note {
  _id:ID
  notepoints:[String]
  image:String
  content:String
  routeId:Route!
}

type Tag {
  _id:ID
  tagName:String
  routeId:Route!
}

type Query {
    users: [User]!
    user(userId: ID!):User
    me: User
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
}


`
//NOTE: I'm not totally sure if thats how  the query should look for user query context
//we need to add more  queries and mutations