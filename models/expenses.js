const db = require('../util/database');

module.exports = class Expenses {

    constructor(id, cantidad, tipo, descripcion, beneficiado, empleado_id, fecha, inicial, final, created_at, updated_at) {
        this.id = id;
        this.cantidad = cantidad;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.beneficiado = beneficiado;
        this.empleado_id = empleado_id;
        this.fecha = fecha;
        this.inicial = inicial;
        this.final = final;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    // static getAllExpenses() {
    //     return db.execute(`SELECT * FROM expenses`)
    // }

    static getAllExpensesForDate(inicial, final) {
        return db.execute(`CALL getAllExpensesForDate (?, ?);`, [inicial, final])
    }

    static getAllExpensesEmployees() {
        return db.execute(`SELECT e.exp_ID, e.exp_cantidad, e.exp_typ_ID, e.exp_fecha, t.typ_ID, t.typ_gasto, e.exp_descripcion, e.exp_beneficiado, e.exp_emp_ID, em.emp_ID, em.emp_nombres, em.emp_apellidos FROM expenses e INNER JOIN employees em ON e.exp_emp_ID = em.emp_ID INNER JOIN type_expense t ON t.typ_ID = e.exp_typ_ID`)
    }

    static addNewExpense(cantidad, tipo, descripcion, beneficiado, empleado_id, fecha, created_at, updated_at) {
        return db.execute(`INSERT INTO expenses (exp_cantidad, exp_typ_ID, exp_descripcion, exp_beneficiado, exp_emp_ID, exp_fecha, exp_created_at, exp_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [cantidad, tipo, descripcion, beneficiado, empleado_id, fecha, created_at, null]);
    }

    static editOneExpense(id, cantidad, tipo, descripcion, beneficiado, empleado_id, fecha, updated_at) {
        return db.execute(`UPDATE expenses SET exp_cantidad=?, exp_typ_ID=?, exp_descripcion=?, exp_beneficiado=?, exp_emp_ID=?, exp_fecha=?, exp_updated_at=? WHERE exp_ID=?`,
            [cantidad, tipo, descripcion, beneficiado, empleado_id, fecha, updated_at, id]);
    }

    static deleteOneExpense(id) {
        return db.execute(`DELETE FROM expenses WHERE exp_ID = ?`, [id]);
    }

}