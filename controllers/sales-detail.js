const SalesDetail = require('../models/sales-detail');

const getSalesDetailForId = async (req, res, next) => {
  try {
    const [getSaleDetail] = await SalesDetail.getSalesDetailForId(req.params.id);
    res.status(200).json(getSaleDetail[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addAllSalesDetail = async (req, res, next) => {
  try {
    const addSale = await SalesDetail.addAllSalesDetail();
    res.status(201).json(addSale);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const deleteAllTemporarySalesDetail = async (req, res, next) => {
  try {
    const deleteAllSales = await SalesDetail.deleteAllTemporarySalesDetail();
    res.status(200).json(deleteAllSales);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getSalesDetailForId,
  addAllSalesDetail,
  deleteAllTemporarySalesDetail
}