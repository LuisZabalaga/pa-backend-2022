const express = require('express');
const typeExpenseController = require('../controllers/type-expense');
const typeExpenseRoutes = express.Router();

typeExpenseRoutes.get('/',  typeExpenseController.getAllTypeExpenses);
typeExpenseRoutes.post('/', typeExpenseController.addNewTypeExpense);
typeExpenseRoutes.put('/:id', typeExpenseController.editOneTypeExpense);
typeExpenseRoutes.delete('/:id', typeExpenseController.deleteOneTypeExpense);

module.exports = typeExpenseRoutes;