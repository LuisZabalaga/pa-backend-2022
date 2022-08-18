const db = require('../util/database');

module.exports = class TypeExpense {

    constructor(id, gasto, created_at, updated_at) {
        this.id = id;
        this.gasto = gasto;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllTypeExpenses() {
        return db.execute(`SELECT * FROM type_expense`)
    }

    static addNewTypeExpense(gasto, created_at, updated_at) {
        return db.execute(`INSERT INTO type_expense (typ_gasto, typ_created_at, typ_updated_at) VALUES (?, ?, ?)`,
            [gasto, created_at, null]);
    }

    static editOneTypeExpense(id, gasto, updated_at) {
        return db.execute(`UPDATE type_expense SET typ_gasto=?, typ_updated_at=? WHERE typ_ID=?`,
            [gasto, updated_at, id]);
    }

    static deleteOneTypeExpense(id) {
        return db.execute(`DELETE FROM type_expense WHERE typ_ID = ?`, [id]);
    }

}