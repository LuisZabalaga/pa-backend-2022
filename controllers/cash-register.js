const CashRegister = require('../models/cash-register');

const getAllCashRegisterForDate = async (req, res, next) => {
    try {
      const [allCashRegister] = await CashRegister.getAllCashRegisterForDate(
        req.params.inicial,
        req.params.final
        );
      res.status(200).json(allCashRegister);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const getAllCashRegisterIncomes = async (req, res, next) => {
    try {
        const [incomes] = await CashRegister.getAllCashRegisterIncomes();
        res.status(200).json(incomes);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

const getAllCashRegisterExpenses = async (req, res, next) => {
    try {
        const [expenses] = await CashRegister.getAllCashRegisterExpenses();
        res.status(200).json(expenses);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// const getAllCashRegister = async (req, res, next) => {
//     try {
//         const [allCashRegister] = await CashRegister.getAllCashRegister();
//         res.status(200).json(allCashRegister);
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

const addNewCashRegister = async (req, res, next) => {
    try {
        const addCashRegister = await CashRegister.addNewCashRegister(
            req.body.cas_monto,
            req.body.cas_fecha,
            req.body.cas_estado,
            req.body.cas_concepto,
            req.body.cas_emp_ID,
            req.body.cas_created_at,
            req.body.cas_updated_at,
        );
        res.status(201).json(addCashRegister)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneCashRegister = async (req, res, next) => {
    try {
        const editCashRegister = await CashRegister.editOneCashRegister(
            req.body.cas_ID,
            req.body.cas_monto,
            req.body.cas_fecha,
            req.body.cas_estado,
            req.body.cas_concepto,
            req.body.cas_emp_ID,
            // req.body.cas_created_at,
            req.body.cas_updated_at,
        );
        res.status(200).json(editCashRegister)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneCashRegister = async (req, res, next) => {
    try {
        const deleteCashRegister = await CashRegister.deleteOneCashRegister(req.params.id);
        res.status(200).json(deleteCashRegister);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

module.exports = {
    getAllCashRegisterForDate,
    // getAllCashRegister,
    addNewCashRegister,
    editOneCashRegister,
    deleteOneCashRegister,
    getAllCashRegisterIncomes,
    getAllCashRegisterExpenses
}