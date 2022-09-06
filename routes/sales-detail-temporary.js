const express = require('express');
const temporarySalesDetailController = require('../controllers/sales-detail-temporary');
const temporarySalesDetailRoutes = express.Router();

temporarySalesDetailRoutes.get('/', temporarySalesDetailController.getAllTemporarySalesDetail);
temporarySalesDetailRoutes.get('/:to', temporarySalesDetailController.getTotalTemporarySalesDetail);
temporarySalesDetailRoutes.post('/', temporarySalesDetailController.addNewTemporarySaleDetail);
temporarySalesDetailRoutes.delete('/:peso_compra/:producto', temporarySalesDetailController.addWeightProductForSales);
temporarySalesDetailRoutes.get('/:peso_compra/:producto', temporarySalesDetailController.diminishWeightProductForSales);
temporarySalesDetailRoutes.delete('/:id', temporarySalesDetailController.deleteOneTemporarySaleDetail);

module.exports = temporarySalesDetailRoutes;