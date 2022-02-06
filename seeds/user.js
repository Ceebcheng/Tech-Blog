const { User } = require('../models');

const userData = [
  {
    username: 'Lebron James',
    password: 'lakers'
    
  },
  {
    username: 'Spider Man',
    password: 'peterparker'
  },
  {
    username: 'Super Man',
    password: 'clarkkent'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;