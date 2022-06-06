// const {AuthenticationError} = require('apollo-server-express');
const {User, Note, Route, Tag } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async()=> {
            return User.find({}).populate('routes')
           ;
        },
        user: async (parent, {userId}) => {
            return User.findById({_id: userId}).populate('routes')
        },
        me: async (parent, args, context)=>{
            if(context.user){
                return User.findOne({_id: context.user._id}).populate('routes')
          ;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        routes: async () =>{
            return Route.find().populate('Tag').populate('Note')
        },
        singleRoute: async (parent, { routeId}) =>{
            return Route.findOne({ _id: routeId }).populate('Tag').populate('Note')
        }
    },
    Mutation:{
        addUser: async  (parent, {username, email, password}) => {
            const user = await User.create({ username, email, password});
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('No profile with this username found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        addRoute: async ( parent, args) =>{
            const createRoute = await Route.create(args);
            const addToUser = await User.findOneAndUpdate(
                args.routeId, {$addToSet:{routes: createRoute._id}, new: true}
            )
            return {createRoute, addToUser}
        },
        addNote: async ( parent, args) =>{
            const createNote = await Note.create(args)
            const addToRoute = await Route.findOneAndUpdate(
                args.routeId, {$addToSet:{notes: createNote._id}, new: true}
            )
            return {createNote, addToRoute}
        }
    }
}

module.exports = resolvers
