// const {AuthenticationError} = require('apollo-server-express');
const { User, Note, Route } = require('../models');
const { findOneAndUpdate } = require('../models/Note');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // users: async()=> {
        //     return User.find({}).populate('routes')
        //    ;
        // },
        user: async (parent, { userId }) => {
            return User.findById({ _id: userId })
        },
        // me: async (parent, args, context)=>{
        //     if(context.user){
        //         return User.findOne({_id: context.user._id}).populate('routes')
        //   ;
        //     }
        //     throw new AuthenticationError('You need to be logged in!')
        // },
        routes: async () => {
            return Route.find().populate('notes')
        },
        singleRoute: async (parent, { routeId }) => {
            return Route.findOne({ _id: routeId }).populate('notes')
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // login: async (parent, { username, password }) => {
        //     const user = await User.findOne({ username });

        //     if (!user) {
        //       throw new AuthenticationError('No profile with this username found!');
        //     }

        //     const correctPw = await profile.isCorrectPassword(password);

        //     if (!correctPw) {
        //       throw new AuthenticationError('Incorrect password!');
        //     }

        //     const token = signToken(user);
        //     return { token, user };
        // },
        addRoute: async (parent, args) => {
            const createRoute = await Route.create(args);
            const addToUser = await User.findOneAndUpdate(
                args.routeId, { $addToSet: { routes: createRoute }, new: true }
            )
            return { createRoute, addToUser }
        },
        addNote: async (parent, args) => {
            const createNote = await Note.create(args)
            const addToRoute = await Route.findOneAndUpdate(
                args.routeId, { $addToSet: { notes: createNote._id }, new: true }
            )
            return { createNote, addToRoute }
        },
        //+1 the vote count on a specific route
        upVote: async (parent, args) => {
            const upvote = await Route.findOneAndUpdate(
                args.routeId,
                { $inc: { votes: 1 } },
                { new: true }
            );
            return upvote;
        },
        //-1 the vote count on a specific route
        downVote: async (parent, args) => {
            const downvote = await Route.findOneAndUpdate(
                args.routeId,
                { $inc: { votes: -1 } },
                { new: true }
            );
            return downvote;
        },
        //removes a route via route_id
        removeRoute: async (parent, { routeId }) => {
            const parentObj = Route.findOne({_id: routeId})
            if(parentObj.notes){
                parentObj.notes.map((x)=>{
                    Note.findOneAndDelete( {_id: x} )
                })
            }
            return Route.findOneAndDelete({ _id: routeId });
          },
        //removes a note via note_id  
        removeNote: async (parent, {noteId}) => {
            Route.findOneAndUpdate(
                {_id: this.routeId},
                {$pull: {notes: noteId}},
                {new: true}
                )
            return Note.findOneAndDelete({ _id: noteId });
          },
    },
};

module.exports = resolvers
