const PurchaseDetail = require('../models/purchase-detail');

const getPurchaseDetailForId = async (req, res, next) => {
  try {
    const [getPurchaseDetail] = await PurchaseDetail.getPurchaseDetailForId(req.params.id);
    res.status(200).json(getPurchaseDetail[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addAllPurchasesDetail = async (req, res, next) => {
  try {
    const addPurchases = await PurchaseDetail.addAllPurchasesDetail();
    res.status(201).json(addPurchases);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const deleteAllTemporaryPurchaseDetail = async (req, res, next) => {
  try {
    const deleteAllPurchases = await PurchaseDetail.deleteAllTemporaryPurchaseDetail();
    res.status(200).json(deleteAllPurchases);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getPurchaseDetailForId,
  addAllPurchasesDetail,
  deleteAllTemporaryPurchaseDetail
}