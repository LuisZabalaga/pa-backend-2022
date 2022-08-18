const express = require('express');
const customerController = require('../controllers/customers');
const customerRoutes = express.Router();

customerRoutes.get('/', customerController.getAllCustomers);
customerRoutes.post('/', customerController.addNewCustomer);
customerRoutes.put('/:id', customerController.editOneCustomer);
customerRoutes.delete('/:id', customerController.deleteOneCustomer);

module.exports = customerRoutes;
