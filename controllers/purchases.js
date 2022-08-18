const Purchases = require('../models/purchases');

// const getAllPurchases = async (req, res, next) => {
//     try {
//         const [allPurchases] = await Purchases.getAllPurchase();
//         res.status(200).json(allPurchases[0]);
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

const getAllPurchasesForDate = async (req, res, next) => {
    try {
        const [allPurchasesForDate] = await Purchases.getAllPurchasesForDate(
            req.params.inicial,
            req.params.final
        );
        res.status(200).json(allPurchasesForDate[0]);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

const getOnePurchaseForId = async (req, res, next) => {
    try {
      const [getPurchase] = await Purchases.getOnePurchaseForId(req.params.id);
      res.status(200).json(getPurchase[0]);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewPurchases = async (req, res, next) => {
    try {
        const addPurchase = await Purchases.addNewPurchase(
            req.body.pu_boleta,
            req.body.pu_prov_ID,
            req.body.pu_emp_ID,
            req.body.pu_fecha,
            req.body.pu_total_importe,
            req.body.pu_adelanto,
            req.body.pu_flete,
            req.body.pu_total,
            req.body.pu_created_at,
            req.body.pu_updated_at
        );
        res.status(201).json(addPurchase)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

const editOnePurchase = async (req, res, next) => {
    try {
        const editPurchase = await Purchases.editOnePurchase(
            req.body.pu_ID,
            req.body.pu_boleta,
            req.body.pu_emp_ID,
            req.body.pu_fecha,
            req.body.pu_total,
            //   req.body.pu_created_at,
            req.body.pu_updated_at
        );
        res.status(200).json(editPurchase)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOnePurchase = async (req, res, next) => {
    try {
        const deletePurchase = await Purchases.deleteOnePurchase(req.params.id);
        res.status(200).json(deletePurchase);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

module.exports = {
    getAllPurchasesForDate,
    getOnePurchaseForId,
    editOnePurchase,
    addNewPurchases,
    deleteOnePurchase
}