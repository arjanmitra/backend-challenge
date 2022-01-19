const Sequelize = require('sequelize');
const db = require('../db');
const uuid = require('uuid');

const Shipment = db.define('shipment', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  tracking_number: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  shipping_address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ordered_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  delivered_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Shipment;
