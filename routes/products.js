const express = require('express');
const productController = require('../controllers/products');
const productRoutes = express.Router();

productRoutes.get('/', productController.getAllProductsCategorie);
productRoutes.get('/:id', productController.getTotalWeightProductsById);
productRoutes.post('/', productController.addNewProduct);
productRoutes.put('/:id', productController.editOneProduct);
productRoutes.delete('/:id', productController.deleteOneProduct);

module.exports = productRoutes;