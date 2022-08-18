const express = require('express');
const employeeController = require('../controllers/employees');
const employeeRoutes = express.Router();

employeeRoutes.get('/', employeeController.getAllEmployees);
employeeRoutes.post('/', employeeController.addNewEmployee);
employeeRoutes.put('/:id', employeeController.editOneEmployee);
employeeRoutes.delete('/:id', employeeController.deleteOneEmployee);

module.exports = employeeRoutes;