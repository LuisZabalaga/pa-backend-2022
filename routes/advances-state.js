const express = require('express');
const advancesStateController = require('../controllers/advances-state');
const advancesStateRoutes = express.Router();

advancesStateRoutes.get('/:proveedor', advancesStateController.changeStateForAdvanceToProvider);
advancesStateRoutes.get('/:estado/:cliente', advancesStateController.changeStateForAdvanceToCustomer);

module.exports = advancesStateRoutes;
