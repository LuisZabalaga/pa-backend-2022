const Providers = require('../models/providers');

const getAllProviders = async (req, res, next) => {
    try {
      const [allProviders] = await Providers.getAllProviders();
      res.status(200).json(allProviders);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewProvider = async(req, res, next) => {
    try {
        const addProvider = await Providers.addNewProvider (
            req.body.prov_nombres, 
            req.body.prov_apellidos,
            req.body.prov_razon_social,
            req.body.prov_ruc, 
            req.body.prov_email, 
            req.body.prov_celular, 
            req.body.prov_direccion, 
            req.body.prov_ciudad, 
            req.body.prov_estado,
            req.body.prov_created_at, 
            req.body.prov_updated_at
        );
        res.status(201).json(addProvider)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
            console.log(err);
        }
        next(err);
    }

}

const editOneProvider = async(req, res, next) => {
    try {
        const editProvider = await Providers.editOneProvider(
            req.body.prov_ID,
            req.body.prov_nombres, 
            req.body.prov_apellidos,
            req.body.prov_razon_social,
            req.body.prov_ruc, 
            req.body.prov_email, 
            req.body.prov_celular, 
            req.body.prov_direccion, 
            req.body.prov_ciudad, 
            req.body.prov_estado,
            // req.body.prov_created_at, 
            req.body.prov_updated_at
        );
        res.status(200).json(editProvider)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneProvider = async (req, res, next) => {
    try {
      const deleteProvider = await Providers.deleteOneProvider(req.params.id);
      res.status(200).json(deleteProvider);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllProviders,
    addNewProvider,
    editOneProvider,
    deleteOneProvider
}