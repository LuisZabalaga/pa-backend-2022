const express = require('express');
const expenseController = require('../controllers/expenses');
const expenseRoutes = express.Router();

expenseRoutes.get('/:inicial/:final', expenseController.getAllExpensesForDate);
expenseRoutes.get('/', expenseController.getAllExpensesEmployees);
expenseRoutes.post('/', expenseController.addNewExpense);
expenseRoutes.put('/:id', expenseController.editOneExpense);
expenseRoutes.delete('/:id', expenseController.deleteOneExpense);

module.exports = expenseRoutes;