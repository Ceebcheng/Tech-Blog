const { Comment } = require('../models');

const commentData = [
  {
    body: "I Love Marvel",
  },
  {
    body: "I Love DC",
  },
  {
    body: "Google is the best seach engine!!!",
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;