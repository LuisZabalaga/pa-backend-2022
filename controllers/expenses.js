const Expenses = require('../models/expenses');

const getAllExpensesForDate = async (req, res, next) => {
  try {
    const [allExpensesForDate] = await Expenses.getAllExpensesForDate(
      req.params.inicial,
      req.params.final
      );
    res.status(200).json(allExpensesForDate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// const getAllExpenses = async (req, res, next) => {
//   try {
//     const [allExpenses] = await Expenses.getAllExpenses();
//     res.status(200).json(allExpenses);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

const getAllExpensesEmployees = async (req, res, next) => {
  try {
    const [allExpenses] = await Expenses.getAllExpensesEmployees();
    res.status(200).json(allExpenses);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


const addNewExpense = async (req, res, next) => {
  try {
    const addExpense = await Expenses.addNewExpense(
      req.body.exp_cantidad,
      req.body.exp_typ_ID,
      req.body.exp_descripcion,
      req.body.exp_beneficiado,
      req.body.exp_emp_ID,
      req.body.exp_fecha,
      req.body.exp_created_at,
      req.body.exp_updated_at
    );
    res.status(201).json(addExpense)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const editOneExpense = async (req, res, next) => {
  try {
    const editExpense = await Expenses.editOneExpense(
      req.body.exp_ID,
      req.body.exp_cantidad,
      req.body.exp_typ_ID,
      req.body.exp_descripcion,
      req.body.exp_beneficiado,
      req.body.exp_emp_ID,
      req.body.exp_fecha,
      // req.body.exp_created_at,
      req.body.exp_updated_at
    );
    res.status(200).json(editExpense)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

const deleteOneExpense = async (req, res, next) => {
  try {
    const deleteExpense = await Expenses.deleteOneExpense(req.params.id);
    res.status(200).json(deleteExpense);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = {
  getAllExpensesForDate,
  getAllExpensesEmployees,
  // getAllExpenses,
  addNewExpense,
  editOneExpense,
  deleteOneExpense
}