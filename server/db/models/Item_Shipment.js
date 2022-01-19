const Sequelize = require('sequelize');
const db = require('../db');

const Item_Shipment = db.define('item_shipment', {
  count: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Item_Shipment;
