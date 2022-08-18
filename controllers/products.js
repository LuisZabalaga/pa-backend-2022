const Products = require('../models/products');

const getAllProducts = async (req, res, next) => {
    try {
      const [allProducts] = await Products.getAllProducts();
      res.status(200).json(allProducts);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const getAllProductsCategorie = async (req, res, next) => {
    try {
      const [allProducts] = await Products.getAllProductsCategorie();
      res.status(200).json(allProducts);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewProduct = async(req, res, next) => {
    try {
        const addProduct = await Products.addNewProduct(
            req.body.prod_nombre,
            req.body.prod_descripcion,
            req.body.prod_peso_total,
            req.body.prod_peso_aqp,
            req.body.prod_peso_local,
            req.body.prod_imagen,
            req.body.prod_cat_ID,
            req.body.prod_created_at, 
            req.body.prod_updated_at
        );
        res.status(201).json(addProduct)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneProduct = async(req, res, next) => {
    try {
        const editProduct = await Products.editOneProduct(
            req.body.prod_ID,
            req.body.prod_nombre,
            req.body.prod_descripcion,
            req.body.prod_peso_total,
            req.body.prod_peso_aqp,
            req.body.prod_peso_local,
            req.body.prod_imagen,
            req.body.prod_cat_ID,
            // req.body.prod_created_at, 
            req.body.prod_updated_at
        );
        res.status(200).json(editProduct)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneProduct = async (req, res, next) => {
    try {
      const deleteProduct = await Products.deleteOneProduct(req.params.id);
      res.status(200).json(deleteProduct);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllProducts,
    getAllProductsCategorie,
    addNewProduct,
    editOneProduct,
    deleteOneProduct
}