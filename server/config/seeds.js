const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {

  await User.create({
    username:'Molly',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});