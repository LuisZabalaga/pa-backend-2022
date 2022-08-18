const Employees = require('../models/employees');

const getAllEmployees = async (req, res, next) => {
    try {
      const [allEmployees] = await Employees.getAllEmployees();
      res.status(200).json(allEmployees);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewEmployee = async(req, res, next) => {
    try {
        const addEmployee = await Employees.addNewEmployee(
            req.body.emp_nombres, 
            req.body.emp_apellidos,
            req.body.emp_dni, 
            req.body.emp_email, 
            req.body.emp_celular, 
            req.body.emp_direccion, 
            req.body.emp_ciudad, 
            req.body.emp_estado,
            req.body.emp_ingreso,
            req.body.emp_rol_ID,
            req.body.emp_usuario,
            req.body.emp_contraseña, 
            req.body.emp_created_at, 
            req.body.emp_updated_at
        );
        res.status(201).json(addEmployee)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneEmployee = async(req, res, next) => {
    try {
        const editEmployee = await Employees.editOneEmployee(
            req.body.emp_ID,
            req.body.emp_nombres, 
            req.body.emp_apellidos,
            req.body.emp_dni, 
            req.body.emp_email, 
            req.body.emp_celular, 
            req.body.emp_direccion, 
            req.body.emp_ciudad, 
            req.body.emp_estado,
            req.body.emp_ingreso,
            req.body.emp_rol_ID,
            req.body.emp_usuario,
            req.body.emp_contraseña, 
            // req.body.emp_created_at, 
            req.body.emp_updated_at
        );
        res.status(200).json(editEmployee)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneEmployee = async (req, res, next) => {
    try {
      const deleteEmployee = await Employees.deleteOneEmployee(req.params.id);
      res.status(200).json(deleteEmployee);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllEmployees,
    addNewEmployee,
    editOneEmployee,
    deleteOneEmployee
}