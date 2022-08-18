const Customers = require('../models/customers');

const getAllCustomers = async (req, res, next) => {
    try {
      const [allCustomers] = await Customers.getAllCustomers();
      res.status(200).json(allCustomers);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewCustomer = async(req, res, next) => {
    try {
        const addCustomer = await Customers.addNewCustomer(
            req.body.cus_nombres, 
            req.body.cus_apellidos,
            req.body.cus_dni,
            req.body.cus_ruc, 
            req.body.cus_email, 
            req.body.cus_celular, 
            req.body.cus_direccion, 
            req.body.cus_ciudad, 
            req.body.cus_estado, 
            req.body.cus_created_at, 
            req.body.cus_updated_at
        );
        res.status(201).json(addCustomer)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneCustomer = async(req, res, next) => {
    try {
        const editCustomer = await Customers.editOneCustomer(
            req.body.cus_ID,
            req.body.cus_nombres, 
            req.body.cus_apellidos,
            req.body.cus_dni,
            req.body.cus_ruc, 
            req.body.cus_email, 
            req.body.cus_celular, 
            req.body.cus_direccion, 
            req.body.cus_ciudad, 
            req.body.cus_estado, 
            // req.body.created_at, 
            req.body.cus_updated_at
        );
        res.status(200).json(editCustomer)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneCustomer = async (req, res, next) => {
    try {
      const deleteCustomer = await Customers.deleteOneCustomer(req.params.id);
      res.status(200).json(deleteCustomer);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllCustomers,
    addNewCustomer,
    editOneCustomer,
    deleteOneCustomer
}