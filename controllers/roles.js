const Roles = require('../models/roles');

const getAllRoles = async (req, res, next) => {
  try {
    const [allRoles] = await Roles.getAllRoles();
    res.status(200).json(allRoles);
    // res.send({
    //   message: 'Get all roles data',
    // });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewRole = async (req, res, next) => {
  try {
    const addRole = await Roles.addNewRole(
      req.body.rol_perfil,
      req.body.rol_descripcion,
      req.body.rol_created_at,
      req.body.rol_updated_at
    );
    res.status(201).json(addRole)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const editOneRole = async (req, res, next) => {
  try {
    const editRole = await Roles.editOneRole(
      req.body.rol_ID,
      req.body.rol_perfil,
      req.body.rol_descripcion,
      // req.body.rol_created_at, 
      req.body.rol_updated_at
    );
    res.status(200).json(editRole)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const deleteOneRole = async (req, res, next) => {
  try {
    const deleteRole = await Roles.deleteOneRole(req.params.id);
    res.status(200).json(deleteRole);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getAllRoles,
  addNewRole,
  editOneRole,
  deleteOneRole
}