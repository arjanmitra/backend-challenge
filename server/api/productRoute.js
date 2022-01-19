const router = require('express').Router();
const Product = require('../db/models/Product');

//get routes
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
});

//post route

router.post('/', async (req, res, next) => {
  try {
    const { name, manufacturer, modelNo, yearOfMake, description } = req.body;
    const newProduct = await Product.create({
      name,
      manufacturer,
      modelNo,
      yearOfMake,
      description,
    });
    res.send(newProduct).status(201);
  } catch (error) {
    next(error);
  }
});

//put route

router.put('/:id', async (req, res, next) => {
  try {
    const { name, manufacturer, modelNo, yearOfMake, description } = req.body;
    const { id } = req.params;

    const productToBeUpdated = await Product.findByPk(id);
    const updatedProduct = await productToBeUpdated.update({
      name,
      manufacturer,
      modelNo,
      yearOfMake,
      description,
    });
    res.send(updatedProduct).status(204);
  } catch (error) {
    res.sendStatus(401);
  }
});

//delete route

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const productToBeDeleted = await Product.findByPk(id);
    await productToBeDeleted.destroy();
    res.send(productToBeDeleted).status(204);
  } catch (error) {
    res.sendStatus(401);
  }
});

module.exports = router;
