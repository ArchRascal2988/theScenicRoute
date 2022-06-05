const {AuthenticationError} = require('apollo-server-express');
const {User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async()=> {
            return User.find();
        },
        user: async (parent, {userId}) => {
            return User.findOne({_id: userId})
        },
        me: async (parent, args, context)=>{
            if(context.user){
                return User.findOne({_id: context.user._id});
            }
            throw new AuthenticationError('You need to be logged in!')
        },
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
