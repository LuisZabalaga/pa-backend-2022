const TemporaryPurchaseDetail = require('../models/purchase-detail-temporary');

const getAllTemporaryPurchaseDetail = async (req, res, next) => {
  try {
    const [allTemporaryPurchaseDetail] = await TemporaryPurchaseDetail.getAllTemporaryPurchaseDetail();
    res.status(200).json(allTemporaryPurchaseDetail[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getTotalTemporaryPurchaseDetail = async (req, res, next) => {
  try {
    const [allTotalTemporaryPurchaseDetail] = await TemporaryPurchaseDetail.getTotalTemporaryPurchaseDetail();
    res.status(200).json(allTotalTemporaryPurchaseDetail);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addWeightProductForPurchase = async (req, res, next) => {
  try {
    const [addWeightPurchase] = await TemporaryPurchaseDetail.addWeightProductForPurchase(
      req.params.peso_compra,
      req.params.producto
    );
    res.status(200).json(addWeightPurchase);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const diminishWeightProductForPurchase = async (req, res, next) => {
  try {
    const [diminishWeightPurchase] = await TemporaryPurchaseDetail.diminishWeightProductForPurchase(
      req.params.peso_compra,
      req.params.producto
    );
    res.status(200).json(diminishWeightPurchase);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewTemporaryPurchaseDetail = async (req, res, next) => {
  try {
    const addRole = await TemporaryPurchaseDetail.addNewTemporaryPurchaseDetail(
      // req.body.pur_boleta,
      // req.body.pur_fecha,
      req.body.pur_prod_ID,
      // req.body.pur_prov_ID,
      req.body.pur_pu_ID,
      req.body.pur_peso,
      req.body.pur_precio,
      req.body.pur_subtotal,
      req.body.pur_created_at,
      req.body.pur_updated_at
    );
    res.status(201).json(addRole)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

const deleteOneTemporaryPurchaseDetail = async (req, res, next) => {
  try {
    const deleteRole = await TemporaryPurchaseDetail.deleteOneTemporaryPurchaseDetail(req.params.id);
    res.status(200).json(deleteRole);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getAllTemporaryPurchaseDetail,
  getTotalTemporaryPurchaseDetail,
  addWeightProductForPurchase,
  diminishWeightProductForPurchase,
  addNewTemporaryPurchaseDetail,
  deleteOneTemporaryPurchaseDetail
}