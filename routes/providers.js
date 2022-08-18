const express = require('express');
const providerController = require('../controllers/providers');
const providerRoutes = express.Router();

providerRoutes.get('/', providerController.getAllProviders);
providerRoutes.post('/', providerController.addNewProvider);
providerRoutes.put('/:id', providerController.editOneProvider);
providerRoutes.delete('/:id', providerController.deleteOneProvider);

module.exports = providerRoutes;