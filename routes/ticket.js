const express = require('express');
const ticketController = require('../controllers/ticket');
const ticketRoutes = express.Router();

ticketRoutes.get('/', ticketController.getAllTicket);
ticketRoutes.post('/', ticketController.addNewTicket);
// ticketRoutes.put('/:id', rolesController.editOneRole);
// ticketRoutes.delete('/:id', rolesController.deleteOneRole);

module.exports = ticketRoutes;