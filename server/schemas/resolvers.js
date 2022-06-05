const {AuthenticationError} = require('apollo-server-express');
const {User, Note, Route, Tag } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async()=> {
            return User.find({}).populate('routes')
           ;
        },
        user: async (parent, args) => {
            return User.findById(args.id).populate('routes')
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
        // locationRoutes: async () =>{
        //     return Route.find({ geometry: {$gte: YOUR LOCATION, $lte: YOURLOCATION}})
        // },
        route: async(parent, args)=>{
            return Route.findById(args.id).populate('Tag').populate('Note')
        }
    },
    mutation:{
        addUser: async  (parent, {name, email, password}) => {
            const user = await User.create({ name, email, password});
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
    }
};

module.exports = resolvers;
