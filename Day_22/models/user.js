// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
