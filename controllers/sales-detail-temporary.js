const TemporarySalesDetail = require('../models/sales-detail-temporary');

const getAllTemporarySalesDetail = async (req, res, next) => {
  try {
    const [allTemporarySalesDetail] = await TemporarySalesDetail.getAllTemporarySalesDetail();
    res.status(200).json(allTemporarySalesDetail[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getTotalTemporarySalesDetail = async (req, res, next) => {
  try {
    const [allTotalTemporarySalesDetail] = await TemporarySalesDetail.getTotalTemporarySalesDetail();
    res.status(200).json(allTotalTemporarySalesDetail);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addWeightProductForSales = async (req, res, next) => {
  try {
    const [addWeightSale] = await TemporarySalesDetail.addWeightProductForSales(
      req.params.peso_compra,
      req.params.producto
    );
    res.status(200).json(addWeightSale);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const diminishWeightProductForSales = async (req, res, next) => {
  try {
    const [diminishWeightSale] = await TemporarySalesDetail.diminishWeightProductForSales(
      req.params.peso_compra,
      req.params.producto
    );
    res.status(200).json(diminishWeightSale);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewTemporarySaleDetail = async (req, res, next) => {
  try {
    const addRole = await TemporarySalesDetail.addNewTemporarySaleDetail(
      req.body.sal_prod_ID,
      req.body.sal_sa_ID,
      req.body.sal_peso,
      req.body.sal_precio,
      req.body.sal_subtotal,
      req.body.sal_created_at,
      req.body.sal_updated_at
    );
    res.status(201).json(addRole)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

const deleteOneTemporarySaleDetail = async (req, res, next) => {
  try {
    const deleteTemporarySale = await TemporarySalesDetail.deleteOneTemporarySaleDetail(req.params.id);
    res.status(200).json(deleteTemporarySale);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getAllTemporarySalesDetail,
  getTotalTemporarySalesDetail,
  addWeightProductForSales,
  diminishWeightProductForSales,
  addNewTemporarySaleDetail,
  deleteOneTemporarySaleDetail
}