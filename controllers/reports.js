const Reports = require('../models/reports');

const getProductsForCategory = async (req, res, next) => {
  try {
    const [productsForCategory] = await Reports.getProductsForCategory(
      req.params.categoria,
    );
    res.status(200).json(productsForCategory[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getTotalPurchaseForCategorieAndDate = async (req, res, next) => {
  try {
    const [totalForCategory] = await Reports.getTotalPurchaseForCategorieAndDate(
      req.params.categoria,
      req.params.inicial,
      req.params.final,
    );
    res.status(200).json(totalForCategory[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getProductsForCategory,
  getTotalPurchaseForCategorieAndDate
}