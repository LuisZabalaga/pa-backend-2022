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

module.exports = {
  getProductsForCategory,
}