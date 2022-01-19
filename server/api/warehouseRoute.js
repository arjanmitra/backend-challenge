const router = require('express').Router();
const Warehouse = require('../db/models/Warehouse');

//get routes
router.get('/', async (req, res, next) => {
  try {
    const warehouses = await Warehouse.findAll();
    res.status(200).send(warehouses);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const warehouse = await Warehouse.findByPk(id);
    res.status(200).send(warehouse);
  } catch (error) {
    next(error);
  }
});

//post route

router.post('/', async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const newWarehouse = await Warehouse.create({
      name,
      address,
    });
    res.send(newWarehouse).status(201);
  } catch (error) {
    next(error);
  }
});

//put route

router.put('/:id', async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const { id } = req.params;

    const warehouseToBeUpdated = await Warehouse.findByPk(id);
    const updatedWarehouse = await warehouseToBeUpdated.update({
      name,
      address,
    });
    res.send(updatedWarehouse).status(204);
  } catch (error) {
    res.sendStatus(401);
  }
});

//delete route

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const warehouseToBeDeleted = await Warehouse.findByPk(id);
    await warehouseToBeDeleted.destroy();
    res.send(warehouseToBeDeleted).status(204);
  } catch (error) {
    res.sendStatus(401);
  }
});

module.exports = router;
