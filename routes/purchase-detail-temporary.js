const express = require('express');
const temporaryPurchaseDetailController = require('../controllers/purchase-detail-temporary');
const temporaryPurchaseDetailRoutes = express.Router();

temporaryPurchaseDetailRoutes.get('/', temporaryPurchaseDetailController.getAllTemporaryPurchaseDetail);
temporaryPurchaseDetailRoutes.get('/:to', temporaryPurchaseDetailController.getTotalTemporaryPurchaseDetail);
temporaryPurchaseDetailRoutes.post('/', temporaryPurchaseDetailController.addNewTemporaryPurchaseDetail);
temporaryPurchaseDetailRoutes.get('/:peso_compra/:producto', temporaryPurchaseDetailController.addWeightProductForPurchase);
temporaryPurchaseDetailRoutes.delete('/:peso_compra/:producto', temporaryPurchaseDetailController.diminishWeightProductForPurchase);
// temporaryPurchaseDetailRoutes.put('/:id', providerController.editOneProvider);
temporaryPurchaseDetailRoutes.delete('/:id', temporaryPurchaseDetailController.deleteOneTemporaryPurchaseDetail);

module.exports = temporaryPurchaseDetailRoutes;