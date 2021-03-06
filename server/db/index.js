const db = require('./db');
const Product = require('./models/Product');
const Warehouse = require('./models/Warehouse');
const Shipment = require('./models/Shipment');
const Item_Shipment = require('./models/Item_Shipment');
const seed = require('./seed');

const init = async () => {
  try {
    await db.sync({ force: true });
    await seed();
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
};

Product.belongsToMany(Shipment, { through: Item_Shipment });
Shipment.belongsToMany(Product, { through: Item_Shipment });

Shipment.belongsTo(Warehouse);

module.exports = init;
