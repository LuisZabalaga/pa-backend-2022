const WeightProducts = require('../models/weight-products');

const getAllWeightProducts = async (req, res, next) => {
    try {
      const [allWeightProducts] = await WeightProducts.getAllWeightProducts();
      res.status(200).json(allWeightProducts);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

const addWeightProductForId = async(req, res, next) => {
    try {
        const addWeightProduct = await WeightProducts.addWeightProductForId(req.body.pur_prod_ID);
        res.status(201).json(addWeightProduct)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteAllWeightProducts = async (req, res, next) => {
    try {
      const deleteAllWeightProduct = await WeightProducts.deleteAllWeightProducts();
      res.status(200).json(deleteAllWeightProduct);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  const deleteOneWeightProduct = async (req, res, next) => {
    try {
      const deleteOneWeightProduct = await WeightProducts.deleteOneWeightProduct(req.params.id);
      res.status(200).json(deleteOneWeightProduct);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllWeightProducts,
    addWeightProductForId,
    deleteAllWeightProducts,
    deleteOneWeightProduct
}