const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Set up association
Post.belongsTo(User, { foreignKey: 'userId'});
User.hasMany(Post, { foreignKey: 'userId' });

module.exports = Post;
