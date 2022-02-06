const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n DATABASE SYNCED Successfull \n');
    await seedUsers();
    console.log('\n USERS SEEDED SYNCED Successfull \n');
    await seedPosts();
    console.log('\n POSTS SEEDED SYNCED Successfull \n');
    await seedComments();
    console.log('\n COMMENTS SEEDED SYNCED Successfull \n');

    process.exit(0);
  };
  
  seedAll();