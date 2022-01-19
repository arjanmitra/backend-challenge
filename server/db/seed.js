const Item = require('./models/Item');
const Warehouse = require('./models/Warehouse');
const Product = require('./models/Product');

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

    //sample items

    const mjolinirStock = await Item.create({
      name: 'Hammers',
      countOfItem: 29,
      productId: mjolinir.id,
      warehouseId: knowhere.id,
    });

    const shieldStock = await Item.create({
      name: 'Shield batch at bellview',
      countOfItem: 194,
      productId: capShield.id,
      warehouseId: bellview.id,
    });

    const suitStock = await Item.create({
      name: 'Suit stock at Wakanda',
      countOfItem: 23,
      productId: ironManSuit.id,
      warehouseId: wakanda.id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
