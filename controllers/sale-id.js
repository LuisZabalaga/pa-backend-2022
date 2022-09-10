const LastSaleId = require('../models/sale-id');

const getLastSaleId = async (req, res, next) => {
  try {
    const [getLastSale] = await LastSaleId.getLastSaleId();
    res.status(200).json(getLastSale[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getLastSaleId,
}