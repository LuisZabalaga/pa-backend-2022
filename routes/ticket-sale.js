const express = require('express');
const ticketSaleController = require('../controllers/ticket-sale');
const ticketSaleRoutes = express.Router();

ticketSaleRoutes.get('/', ticketSaleController.getAllTicketSale);
ticketSaleRoutes.post('/', ticketSaleController.addNewTicketSale);
// ticketRoutes.put('/:id', rolesController.editOneRole);
// ticketRoutes.delete('/:id', rolesController.deleteOneRole);

module.exports = ticketSaleRoutes;