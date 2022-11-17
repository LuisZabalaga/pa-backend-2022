const CashRegisterBalance = require('../models/cash-register-balance');

const getAllCashRegisterBalanceByDate = async (req, res, next) => {
    try {
      const [allCashRegisterBalance] = await CashRegisterBalance.getAllCashRegisterBalanceByDate(
        req.params.inicial,
        req.params.final
        );
      res.status(200).json(allCashRegisterBalance);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

const getLastCashRegisterBalance = async (req, res, next) => {
    try {
      const [lastCashRegister] = await CashRegisterBalance.getLastCashRegisterBalance();
      res.status(200).json(lastCashRegister);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

const addNewCashRegisterBalance = async (req, res, next) => {
    try {
        const addCashRegisterBalance = await CashRegisterBalance.addNewCashRegisterBalance(
            req.body.bal_fecha,
            req.body.bal_incomes,
            req.body.bal_expenses,
            req.body.bal_balance,
            req.body.bal_emp_ID,
        );
        res.status(201).json(addCashRegisterBalance)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const editOneCashRegisterBalance = async (req, res, next) => {
    try {
        const editCashRegisterBalance = await CashRegisterBalance.editOneCashRegisterBalance(
            req.body.bal_ID,
            req.body.bal_fecha,
            req.body.bal_incomes,
            req.body.bal_expenses,
            req.body.bal_balance,
            req.body.bal_emp_ID,
        );
        res.status(200).json(editCashRegisterBalance)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

const deleteOneCashRegisterBalance = async (req, res, next) => {
    try {
        const deleteCashRegisterBalance = await CashRegisterBalance.deleteOneCashRegisterBalance(
            req.params.id
        );
        res.status(200).json(deleteCashRegisterBalance);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

module.exports = {
    getAllCashRegisterBalanceByDate,
    getLastCashRegisterBalance,
    addNewCashRegisterBalance,
    editOneCashRegisterBalance,
    deleteOneCashRegisterBalance
}