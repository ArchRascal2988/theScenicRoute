const db = require('./connection');
const { User, Route } = require('../models');

db.once('open', async () => {
  await Route.deleteMany()
  await Route.create([
    {"geometry": [
      [-82.83021136401497, 28.068731057081955],
      [-82.82967443530357, 28.083403159176612]
              ],
  "description": "lots of bugs, very hot",
  "difficultyLevel": 1,
  "votes": 0,
  "title": "honeymoon osprey trail",
  "userId": '62a26587be4ee9e47c3edf67',
  "tags": "pizza",
  "notes": [],

            },
  {
  "geometry": [
      [-82.8212915979806, 28.05773940437285],
      [-82.82967443530357, 28.055378742072214],
      [-82.81666529308482, 28.055207261232812]
              ],
  "description": "dogs everywhere! must be heaven",
  "difficultyLevel": 1,
  "votes": 0,
  "title": "honeymoon pet beach walk",
  "userId": '62a26587be4ee9e47c3edf67',
  "tags": "pizza",
  "notes": [],
            },
  {
  
  "geometry": [
      [-82.83320554661061, 28.06567497137443],
      [-82.82967443530357, 28.09695289759868]
              ],
  "description": "taking my date hereeee",
  "difficultyLevel": 1,
  "votes": 0,
  "title": "the scenic walk on honeymoon island",
  "userId": '62a26587be4ee9e47c3edf67',
  "tags": "pizza",
  "notes": [],

            },
  {
  "geometry": [
      [-82.83420767555651, 28.09898460434573],
      [-82.83295016994951, 28.10502714540754]
              ],
  "description": "prepare to get a little wet",
  "difficultyLevel": 4,
  "votes": 0,
  "title": "get to swimming",
  "userId": '62a26587be4ee9e47c3edf67',
  "tags": "pizza",
  "notes": [],

            }
  ])
  
  await User.deleteMany()
  await User.create({
    username:'Molly',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});