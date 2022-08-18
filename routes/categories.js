const express = require('express');
const categorieController = require('../controllers/categories');
const categorieRoutes = express.Router();

categorieRoutes.get('/',  categorieController.getAllCategories);
categorieRoutes.post('/', categorieController.addNewCategorie);
categorieRoutes.put('/:id', categorieController.editOneCategorie);
categorieRoutes.delete('/:id', categorieController.deleteOneCategorie);

module.exports = categorieRoutes;