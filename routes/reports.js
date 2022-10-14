const express = require('express');
const reportsController = require('../controllers/reports');
const reportsRoutes = express.Router();

reportsRoutes.get('/:categoria', reportsController.getProductsForCategory);
reportsRoutes.get('/:categoria/:inicial/:final', reportsController.getTotalPurchaseForCategorieAndDate);

module.exports = reportsRoutes;