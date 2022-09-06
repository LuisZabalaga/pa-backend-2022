const express = require('express');
const LastPurchasesIdController = require('../controllers/purchase-id');
const LastPurchasesIdRoutes = express.Router();

LastPurchasesIdRoutes.get('/', LastPurchasesIdController.getLastPurchaseId);

module.exports = LastPurchasesIdRoutes;