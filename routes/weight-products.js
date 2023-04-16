const express = require('express');
const productWeightController = require('../controllers/weight-products');
const productWeightRoutes = express.Router();

productWeightRoutes.get('/', productWeightController.getAllWeightProducts);
productWeightRoutes.post('/', productWeightController.addWeightProductForId);
productWeightRoutes.delete('/', productWeightController.deleteAllWeightProducts);
productWeightRoutes.delete('/:id', productWeightController.deleteOneWeightProduct);

module.exports = productWeightRoutes;