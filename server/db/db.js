const Sequelize = require('sequelize');
const config = {
  logging: false,
};

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost//backend-challenge',
  config
);

module.exports = db;
