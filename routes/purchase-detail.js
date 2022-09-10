const express = require('express');
const purchasesDetailController = require('../controllers/purchase-detail');
const purchasesDetailRoutes = express.Router();

purchasesDetailRoutes.get('/:id', purchasesDetailController.getPurchaseDetailForId);
purchasesDetailRoutes.post('/', purchasesDetailController.addAllPurchasesDetail);
purchasesDetailRoutes.delete('/', purchasesDetailController.deleteAllTemporaryPurchaseDetail);

module.exports = purchasesDetailRoutes;