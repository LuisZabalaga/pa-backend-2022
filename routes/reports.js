const express = require('express');
const reportsController = require('../controllers/reports');
const reportsRoutes = express.Router();

reportsRoutes.get('/:categoria', reportsController.getProductsForCategory);

module.exports = reportsRoutes;