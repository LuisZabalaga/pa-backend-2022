const db = require('../util/database');

module.exports = class AdvancesState {

    constructor(proveedor, estado, cliente) {
        this.proveedor = proveedor;
        this.estado = estado;
        this.cliente = cliente;
    }

    static changeStateForAdvanceToProvider (proveedor) {
        return db.execute(`CALL changeStateForAdvanceToProvider (?);`, [proveedor])
    }

    static changeStateForAdvanceToCustomer (estado, cliente) {
        return db.execute(`CALL changeStateForAdvanceToCustomer (?, ?);`, [estado, cliente])
    }

    static getLastAdvanceId () {
        return db.execute(`SELECT ad_ID FROM advances WHERE ad_ID = (SELECT MAX(ad_ID) FROM advances);`)
    }

}