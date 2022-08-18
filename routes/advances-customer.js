const express = require('express');
const advancesCustomerController = require('../controllers/advances-customer');
const advancesCustomerRoutes = express.Router();

advancesCustomerRoutes.get('/:cliente', advancesCustomerController.getAdvanceForCustomerAndState);

module.exports = advancesCustomerRoutes;
