const express = require('express');
const cashRegisterController = require('../controllers/cash-register');
const cashRegisterRoutes = express.Router();

cashRegisterRoutes.get('/:inicial/:final',  cashRegisterController.getAllCashRegisterForDate);
cashRegisterRoutes.post('/', cashRegisterController.addNewCashRegister);
cashRegisterRoutes.put('/:id', cashRegisterController.editOneCashRegister);
cashRegisterRoutes.delete('/:id', cashRegisterController.deleteOneCashRegister);
cashRegisterRoutes.get('/:estado/:fecha/:tipo',  cashRegisterController.getTotalCashRegisterForState);

module.exports = cashRegisterRoutes;