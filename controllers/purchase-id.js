const LastPurchaseId = require('../models/purchase-id');

const getLastPurchaseId = async (req, res, next) => {
  try {
    const [getLastPurchase] = await LastPurchaseId.getLastPurchaseId();
    res.status(200).json(getLastPurchase[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getLastPurchaseId,
}