const Warehouse = require('./models/Warehouse');
const Product = require('./models/Product');
const Shipment = require('./models/Shipment');
const Item_Shipment = require('./models/Item_Shipment');

const seed = async () => {
  try {
    //sample warehouses

    const bellview = await Warehouse.create({
      name: 'Bellview',
      address: '101 Bellview Avenue',
    });

    const wakanda = await Warehouse.create({
      name: 'Wakanda',
      address: '101 Wakanda Parkway',
    });

    const knowhere = await Warehouse.create({
      name: 'Knowhere',
      address: '999 Knowhere Blvd',
    });

    //sample products

    const mjolinir = await Product.create({
      name: 'Mjolinir',
      manufacturer: 'A neutron star',
      modelNo: '001A',
      yearOfMake: 'Millions of years ago',
      description:
        'An extremely powerful hammer, this baby will destroy all your enemies with one swing. Please note: You must be worthy. Disclaimer: The manufacturer accepts no responsibility if you spontaneously combust and lose your mind. ',
    });
    const capShield = await Product.create({
      name: 'Captain Americas Shield',
      manufacturer: 'Howard Stark',
      modelNo: '90794812370AJ',
      yearOfMake: 'Sometime during WWII',
      description:
        "Made from the rarest metal on Earth, it is virtually indestructable. Unless you're Thanos.",
    });
    const ironManSuit = await Product.create({
      name: 'Mark LXXXV Suit',
      manufacturer: 'Tony Stark',
      modelNo: 'LXXXV',
      yearOfMake: '2019',
      description: 'The latest suit by Tony Stark, it is made from nanotech.',
    });

    //sample shipments

    const shipment1 = await Shipment.create({
      shipping_address: '4255 Trailmaster Drive',
      ordered_date: '1/11/2022',
      shipped_date: '1/13/2022',
      delivered_date: '1/16/2022',
      warehouseId: wakanda.id,
    });

    const shipment2 = await Shipment.create({
      shipping_address: '6826 Darcel Ave',
      ordered_date: '1/7/2022',
      shipped_date: '1/13/2022',
      warehouseId: knowhere.id,
    });

    //sampe item_shipments

    await Item_Shipment.create({
      productId: mjolinir.id,
      shipmentId: shipment1.id,
      count: 1,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
