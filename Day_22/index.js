// index.js
const { Sequelize } = require('sequelize');

// Replace with your own database details
const sequelize = new Sequelize('Sequelize - Practise', 'postgres', 'raajasree', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

module.exports = sequelize;
