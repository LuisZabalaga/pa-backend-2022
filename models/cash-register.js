const db = require('../util/database');

module.exports = class CashRegister {

    constructor(id, monto, fecha, estado, concepto, encargado, inicial, final, created_at, updated_at) {
        this.id = id;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
        this.concepto = concepto;
        this.encargado = encargado;
        this.inicial = inicial;
        this.final = final;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllCashRegisterIncomes() {
        return db.execute(`SELECT SUM(cas_monto) AS ingresos FROM cash_register WHERE cas_estado = 1;`)
    }

    static getAllCashRegisterExpenses() {
        return db.execute(`SELECT SUM(cas_monto) AS egresos FROM cash_register WHERE cas_estado = 0;`)
    }

    // static getAllCashRegister() {
    //     return db.execute(`SELECT ca.cas_ID, ca.cas_monto, ca.cas_fecha, ca.cas_estado, ca.cas_concepto, ca.cas_emp_ID, em.emp_ID, em.emp_nombres, em.emp_apellidos FROM cash_register ca INNER JOIN employees em ON em.emp_ID = ca.cas_emp_ID`)
    // }

    static getAllCashRegisterForDate (inicial, final) {
        return db.execute(`CALL getAllCashRegisterForDate  (?, ?);`, [inicial, final]);

    }

    static addNewCashRegister(monto, fecha, estado, concepto, encargado, created_at, updated_at) {
        console.log(monto, fecha, estado, concepto, encargado, created_at, updated_at);
        return db.execute(`INSERT INTO cash_register (cas_monto, cas_fecha, cas_estado, cas_concepto, cas_emp_ID, cas_created_at, cas_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [monto, fecha, estado, concepto, encargado, created_at, null]);
    }

    static editOneCashRegister(id, monto, fecha, estado, concepto, encargado, updated_at) {
        return db.execute(`UPDATE cash_register SET cas_monto=?, cas_fecha=?, cas_estado=?, cas_concepto=?, cas_emp_ID=?, cas_updated_at=? WHERE cas_ID=?`,
            [monto, fecha, estado, concepto, encargado, updated_at, id]);
    }

    static deleteOneCashRegister(id) {
        return db.execute(`DELETE FROM cash_register WHERE cas_ID=?`, [id]);
    }

}