const express = require('express');
const LastSaleIdController = require('../controllers/sale-id');
const LastSaleIdRoutes = express.Router();

LastSaleIdRoutes.get('/', LastSaleIdController.getLastSaleId);

module.exports = LastSaleIdRoutes;