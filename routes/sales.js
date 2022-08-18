const express = require('express');
const salesController = require('../controllers/sales');
const salesRoutes = express.Router();

salesRoutes.get('/:inicial/:final', salesController.getAllSalesForDate);
salesRoutes.get('/:id', salesController.getOnesaleForId);
salesRoutes.post('/', salesController.addNewSale);
// salesRoutes.put('/:id', salesController.editOnePurchase);
salesRoutes.delete('/:id', salesController.deleteOneSale);

module.exports = salesRoutes;