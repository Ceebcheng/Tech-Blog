const { Post } = require('../models');

const postData = [
  {
    title: 'Marvel',
    body: `test`,
  },
  {
    title: 'DC',
    body: `test`,
  },
  {
    title: 'Google',
    body: `test`,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;