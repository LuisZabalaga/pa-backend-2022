const express = require('express');
const salesDetailController = require('../controllers/sales-detail');
const salesDetailRoutes = express.Router();

salesDetailRoutes.get('/:id', salesDetailController.getSalesDetailForId);
salesDetailRoutes.post('/', salesDetailController.addAllSalesDetail);
salesDetailRoutes.delete('/', salesDetailController.deleteAllTemporarySalesDetail);

module.exports = salesDetailRoutes;