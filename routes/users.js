const express = require('express');
const usersController = require('../controllers/users');
const usersRoutes = express.Router();

usersRoutes.post('/', usersController.getEmployeeForUser);
// usersRoutes.put('/:id', employeeController.editOneEmployee);
// usersRoutes.delete('/:id', employeeController.deleteOneEmployee);

module.exports = usersRoutes;