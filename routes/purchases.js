const express = require('express');
const purchasesController = require('../controllers/purchases');
const purchasesRoutes = express.Router();

purchasesRoutes.get('/:inicial/:final', purchasesController.getAllPurchasesForDate);
purchasesRoutes.get('/:id', purchasesController.getOnePurchaseForId);
purchasesRoutes.post('/', purchasesController.addNewPurchases);
purchasesRoutes.put('/:id', purchasesController.editOnePurchase);
purchasesRoutes.delete('/:id', purchasesController.deleteOnePurchase);

module.exports = purchasesRoutes;