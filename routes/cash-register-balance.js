const express = require('express');
const cashRegisterBalanceController = require('../controllers/cash-register-balance');
const cashRegisterBalanceRoutes = express.Router();

cashRegisterBalanceRoutes.get('/:inicial/:final', cashRegisterBalanceController.getAllCashRegisterBalanceByDate);
cashRegisterBalanceRoutes.get('/', cashRegisterBalanceController.getLastCashRegisterBalance);
cashRegisterBalanceRoutes.post('/', cashRegisterBalanceController.addNewCashRegisterBalance);
cashRegisterBalanceRoutes.put('/:id', cashRegisterBalanceController.editOneCashRegisterBalance);
cashRegisterBalanceRoutes.delete('/:id', cashRegisterBalanceController.deleteOneCashRegisterBalance);

module.exports = cashRegisterBalanceRoutes;