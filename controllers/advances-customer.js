const AdvancesCustomer = require('../models/advances-customer');

const getAdvanceForCustomerAndState = async (req, res, next) => {
  try {
    const [advancesForCustomerAndState] = await AdvancesCustomer.getAdvanceForCustomerAndState(
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

module.exports = {
  getAdvanceForCustomerAndState
}