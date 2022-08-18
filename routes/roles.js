const express = require('express');
const rolesController = require('../controllers/roles');
const rolesRoutes = express.Router();

rolesRoutes.get('/', rolesController.getAllRoles);
rolesRoutes.post('/', rolesController.addNewRole);
rolesRoutes.put('/:id', rolesController.editOneRole);
rolesRoutes.delete('/:id', rolesController.deleteOneRole);

module.exports = rolesRoutes;