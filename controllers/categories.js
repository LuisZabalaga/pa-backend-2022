const Categories = require('../models/categories');

const getAllCategories = async (req, res, next) => {
    try {
      const [allCategories] = await Categories.getAllCategories();
      res.status(200).json(allCategories);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewCategorie = async(req, res, next) => {
    try {
        const addCategorie = await Categories.addNewCategorie(
            req.body.cat_nombre,
            req.body.cat_descripcion,
            req.body.cat_created_at, 
            req.body.cat_updated_at
        );
        res.status(201).json(addCategorie)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneCategorie = async(req, res, next) => {
    try {
        const editCategorie = await Categories.editOneCategorie(
            req.body.cat_ID,
            req.body.cat_nombre,
            req.body.cat_descripcion,
            // req.body.cat_created_at,
            req.body.cat_updated_at
        );
        res.status(200).json(editCategorie)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneCategorie = async (req, res, next) => {
    try {
      const deleteCategorie = await Categories.deleteOneCategorie(req.params.id);
      res.status(200).json(deleteCategorie);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllCategories,
    addNewCategorie,
    editOneCategorie,
    deleteOneCategorie
}