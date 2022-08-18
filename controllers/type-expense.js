const TypeExpenses = require('../models/type-expense');

const getAllTypeExpenses = async (req, res, next) => {
    try {
      const [allTypeExpenses] = await TypeExpenses.getAllTypeExpenses();
      res.status(200).json(allTypeExpenses);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewTypeExpense = async(req, res, next) => {
    try {
        const addTypeExpense = await TypeExpenses.addNewTypeExpense(
            req.body.typ_gasto,
            req.body.typ_created_at, 
            req.body.typ_updated_at
        );
        res.status(201).json(addTypeExpense)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneTypeExpense = async(req, res, next) => {
    try {
        const editTypeExpense = await TypeExpenses.editOneTypeExpense(
            req.body.typ_ID,
            req.body.typ_gasto,
            // req.body.typ_created_at, 
            req.body.typ_updated_at
        );
        res.status(200).json(editTypeExpense)
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneTypeExpense = async (req, res, next) => {
    try {
      const deleteTypeExpense = await TypeExpenses.deleteOneTypeExpense(req.params.id);
      res.status(200).json(deleteTypeExpense);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

module.exports = {
    getAllTypeExpenses,
    addNewTypeExpense,
    editOneTypeExpense,
    deleteOneTypeExpense
}