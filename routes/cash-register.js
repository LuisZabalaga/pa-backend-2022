const express = require('express');
const cashRegisterController = require('../controllers/cash-register');
const cashRegisterRoutes = express.Router();

cashRegisterRoutes.get('/:inicial/:final',  cashRegisterController.getAllCashRegisterForDate);
cashRegisterRoutes.get('/eg',  cashRegisterController.getAllCashRegisterExpenses);
cashRegisterRoutes.get('/in',  cashRegisterController.getAllCashRegisterIncomes);
cashRegisterRoutes.post('/', cashRegisterController.addNewCashRegister);
cashRegisterRoutes.put('/:id', cashRegisterController.editOneCashRegister);
cashRegisterRoutes.delete('/:id', cashRegisterController.deleteOneCashRegister);

module.exports = cashRegisterRoutes;