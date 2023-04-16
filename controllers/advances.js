const Advances = require('../models/advances');

const getAllAdvancesForProvidersAndDate  = async (req, res, next) => {
  try {
    const [allAdvancesForProvider] = await Advances.getAllAdvancesForProvidersAndDate (
      // req.params.prov_cus,
      req.params.inicial,
      req.params.final
      );
    res.status(200).json(allAdvancesForProvider);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getTotalAdvancesForCustomersAndDate  = async (req, res, next) => {
  try {
    const [allAdvancesForCustomer] = await Advances.getTotalAdvancesForCustomersAndDate (
      req.params.prov_cus,
      req.params.inicial,
      req.params.final
      );
    res.status(200).json(allAdvancesForCustomer);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getTotalAdvancesForCustomersAndDateAndState  = async (req, res, next) => {
  try {
    const [allAdvancesForCustomer] = await Advances.getTotalAdvancesForCustomersAndDateAndState (
      req.params.prov_cus,
      req.params.estado,
      req.params.inicial,
      req.params.final,
      );
    res.status(200).json(allAdvancesForCustomer);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getAdvanceForIdOfCustomerAndDate = async (req, res, next) => {
  try {
    const [advancesForIdCustomer] = await Advances.getAdvanceForIdOfCustomerAndDate(
      req.params.prov_cus,
      req.params.cliente,
      req.params.estado,
      req.params.inicial,
      req.params.final
      );
    res.status(200).json(advancesForIdCustomer);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// const getAllExpensesEmployees = async (req, res, next) => {
//   try {
//     const [allExpenses] = await Expenses.getAllExpensesEmployees();
//     res.status(200).json(allExpenses);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

const getAdvanceForProviderAndState = async (req, res, next) => {
  try {
    const [advancesForProviderAndState] = await Advances.getAdvanceForProviderAndState(
      req.params.proveedor,
      );
    res.status(200).json(advancesForProviderAndState);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getAdvanceForCustomerAndState = async (req, res, next) => {
  try {
    const [advancesForCustomerAndState] = await Advances.getAdvanceForCustomerAndState(
      req.params.estado,
      req.params.cliente
      );
    res.status(200).json(advancesForCustomerAndState);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewAdvance = async (req, res, next) => {
  try {
    const addAdvance = await Advances.addNewAdvance(
      req.body.ad_fecha,
      req.body.ad_cantidad,
      req.body.ad_dest_adv,
      req.body.ad_prov_cus_ID,
      req.body.ad_estado
    );
    res.status(201).json(addAdvance)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const editOneAdvance = async (req, res, next) => {
  try {
    const editAdvance = await Advances.editOneAdvance(
      req.body.ad_ID,
      req.body.ad_fecha,
      req.body.ad_cantidad,
      req.body.ad_dest_adv,
      req.body.ad_prov_cus_ID,
      req.body.ad_estado
    );
    res.status(200).json(editAdvance)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const deleteOneAdvance = async (req, res, next) => {
  try {
    const deleteAdvance = await Advances.deleteOneAdvance(req.params.id);
    res.status(200).json(deleteAdvance);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getAllAdvancesForProvidersAndDate,
  getTotalAdvancesForCustomersAndDate,
  getTotalAdvancesForCustomersAndDateAndState,
  getAdvanceForIdOfCustomerAndDate,
  getAdvanceForProviderAndState,
  getAdvanceForCustomerAndState,
  addNewAdvance,
  editOneAdvance,
  deleteOneAdvance
}