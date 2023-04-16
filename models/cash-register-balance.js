const db = require('../util/database');

module.exports = class CashRegisterBalance {

    constructor(id, fecha, ingresos, gastos, balance, balance_final, ecargado) {
        this.id = id;
        this.fecha = fecha;
        this.ingresos = ingresos;
        this.gastos = gastos;
        this.balance = balance;
        this.balance_final = balance_final;
        this.ecargado = ecargado;
    }

    static getAllCashRegisterBalanceByDate(inicial, final) {
        return db.execute(`CALL getAllCashRegisterBalanceByDate (?, ?);`, [inicial, final]);
    }

    static getLastCashRegisterBalance() {
        return db.execute(`SELECT * FROM cash_register_balance WHERE bal_ID=(SELECT max(bal_ID) FROM cash_register_balance);`);
    }

    static addNewCashRegisterBalance(fecha, ingresos, gastos, balance, balance_final, ecargado) {
        let balances = balance_final - gastos + ingresos;
        // console.log(fecha, ingresos, gastos, balances, balance_final+balances, ecargado);
        return db.execute(`INSERT INTO cash_register_balance (bal_fecha, bal_incomes, bal_expenses, bal_balance, bal_previous_balance, bal_emp_ID) VALUES (?, ?, ?, ?, ?, ?)`,
            [fecha, ingresos, gastos, ingresos-gastos, balances, ecargado]);
    }

    static changeStateCashRegisterBalance(id, state) {
        return db.execute(`CALL change_state_cash_register_balance (?, ?)`, [id, state]);
    }

    static editOneCashRegisterBalance(id, fecha, ingresos, gastos, balance, ecargado) {
        return db.execute(`UPDATE cash_register_balance SET bal_fecha=?, bal_incomes=?, bal_expenses=?, bal_balance=?, bal_emp_ID=? WHERE bal_ID=?`,
            [fecha, ingresos, gastos, balance, ecargado, id]);
    }

    static deleteOneCashRegisterBalance(id) {
        return db.execute(`DELETE FROM cash_register_balance WHERE bal_ID=?`, [id]);
    }

}