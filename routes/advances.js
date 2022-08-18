const express = require('express');
const advancesController = require('../controllers/advances');
const advancesRoutes = express.Router();

advancesRoutes.get('/:inicial/:final', advancesController.getAllAdvancesForProvidersAndDate);
advancesRoutes.get('/:prov_cus/:inicial/:final', advancesController.getTotalAdvancesForCustomersAndDate);
advancesRoutes.get('/:prov_cus/:estado/:inicial/:final', advancesController.getTotalAdvancesForCustomersAndDateAndState);
advancesRoutes.get('/:prov_cus/:cliente/:estado/:inicial/:final', advancesController.getAdvanceForIdOfCustomerAndDate);
advancesRoutes.get('/:proveedor', advancesController.getAdvanceForProviderAndState);
// advancesRoutes.get('/:estado/:cliente', advancesController.getAdvanceForCustomerAndState);
advancesRoutes.post('/', advancesController.addNewAdvance);
advancesRoutes.put('/:id', advancesController.editOneAdvance);
advancesRoutes.delete('/:id', advancesController.deleteOneAdvance);

module.exports = advancesRoutes;
