const AdvancesState = require('../models/advances-state');

const changeStateForAdvanceToProvider  = async (req, res, next) => {
  try {
    const [stateForProvider] = await AdvancesState.changeStateForAdvanceToProvider (
      req.params.proveedor
      );
    res.status(200).json(stateForProvider);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const changeStateForAdvanceToCustomer  = async (req, res, next) => {
  try {
    const [stateForCustomer] = await AdvancesState.changeStateForAdvanceToCustomer (
      req.params.estado,
      req.params.cliente
      );
    res.status(200).json(stateForCustomer);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


module.exports = {
  changeStateForAdvanceToProvider,
  changeStateForAdvanceToCustomer
}