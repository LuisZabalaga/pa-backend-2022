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

// const getTotalTemporaryPurchaseDetail = async (req, res, next) => {
//   try {
//     const [allTotalTemporaryPurchaseDetail] = await TemporaryPurchaseDetail.getTotalTemporaryPurchaseDetail();
//     res.status(200).json(allTotalTemporaryPurchaseDetail);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// const addAllPurchasesDetail = async (req, res, next) => {
//   try {
//     const addPurchases = await PurchaseDetail.addAllPurchasesDetail(
//       req.body.purc_boleta,
//       req.body.purc_fecha,
//       req.body.purc_prod_ID,
//       req.body.purc_prov_ID,
//       req.body.purc_peso,
//       req.body.purc_precio,
//       req.body.purc_subtotal,
//       req.body.purc_created_at,
//       req.body.purc_updated_at
//     );
//     res.status(201).json(addPurchases);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

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

// const addNewTemporaryPurchaseDetail = async (req, res, next) => {
//   try {
//     const addRole = await TemporaryPurchaseDetail.addNewTemporaryPurchaseDetail(
//       req.body.pur_boleta,
//       req.body.pur_fecha,
//       req.body.pur_prod_ID,
//       req.body.pur_prov_ID,
//       req.body.pur_peso,
//       req.body.pur_precio,
//       req.body.pur_subtotal,
//       req.body.pur_created_at,
//       req.body.pur_updated_at
//     );
//     res.status(201).json(addRole)
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// }

// const deleteOneTemporaryPurchaseDetail = async (req, res, next) => {
//   try {
//     const deleteRole = await TemporaryPurchaseDetail.deleteOneTemporaryPurchaseDetail(req.params.id);
//     res.status(200).json(deleteRole);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

module.exports = {
  getPurchaseDetailForId,
  addAllPurchasesDetail,
  deleteAllTemporaryPurchaseDetail
}