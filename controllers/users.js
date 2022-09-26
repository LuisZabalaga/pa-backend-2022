const Users = require('../models/users');
const jwt = require('jsonwebtoken');

const getEmployeeForUser = async (req, res, next) => {
    try {
      const [employeeForUser] = await Users.getEmployeeForUser(
        req.body.emp_usuario, 
        req.body.emp_contraseña,
      );
      // res.status(200).json(employeeForUser);
      if (employeeForUser.length > 0) {
        let data = JSON.stringify(employeeForUser[0]);
        const token = jwt.sign(data, 'pa2022');
        res.json({token});
      } else {
        res.json('Usuario o Clave incorrecta');
      }
      
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
  getEmployeeForUser,
}