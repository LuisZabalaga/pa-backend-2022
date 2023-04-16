const db = require('../util/database');

module.exports = class Advances {

    constructor(id, fecha, cantidad, estado_adelanto, prov_cus_ID, estado, cliente, prov_cus, proveedor, inicial, final, created_at, updated_at) {
        this.id = id;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.estado_adelanto = estado_adelanto;
        this.prov_cus_ID = prov_cus_ID;
        this.estado = estado;
        this.cliente = cliente;
        this.prov_cus = prov_cus;
        this.proveedor = proveedor;
        this.inicial = inicial;
        this.final = final;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllAdvancesForProvidersAndDate (inicial, final) {
        return db.execute(`CALL getAllAdvancesForProvidersAndDate (?, ?, ?);`, [0, inicial, final])
    }

    static getTotalAdvancesForCustomersAndDate (prov_cus, inicial, final) {
        return db.execute(`CALL getTotalAdvancesForCustomerAndDate (?, ?, ?);`, [prov_cus, inicial, final])
    }

    static getTotalAdvancesForCustomersAndDateAndState (prov_cus, estado, inicial, final) {
        return db.execute(`CALL getTotalAdvancesForCustomerAndDateState (?, ?, ?, ?);`, [prov_cus, estado, inicial, final])
    }

    static getAdvanceForIdOfCustomerAndDate(prov_cus, cliente, estado, inicial, final) {
        console.log(prov_cus, cliente, inicial, final);
        return db.execute(`CALL getAdvancesForIdOfCustomerAndDate (?, ?, ?, ?, ?);`, [prov_cus, cliente, estado, inicial, final])
    }

    static getAdvanceForProviderAndState(proveedor) {
        return db.execute(`CALL getAdvanceForProviderAndState (?);`, [proveedor]);
    }

    static getAdvanceForCustomerAndState(estado, cliente) {
        console.log(estado, cliente);
        return db.execute(`CALL getAdvanceForCustomerAndState (?, ?);`, [estado, cliente]);
    }

    static addNewAdvance(fecha, cantidad, estado_adelanto, prov_cus_ID, estado) {
        return db.execute(`INSERT INTO advances (ad_fecha, ad_cantidad, ad_dest_adv, ad_prov_cus_ID, ad_estado) VALUES (?, ?, ?, ?, ?)`,
        [fecha, cantidad, estado_adelanto, prov_cus_ID, estado]);
    }

    static editOneAdvance(id, fecha, cantidad, estado_adelanto, prov_cus_ID, estado) {
        return db.execute(`UPDATE advances SET ad_fecha=?, ad_cantidad=?, ad_dest_adv=?, ad_prov_cus_ID=?, ad_estado=? WHERE ad_ID=?`,
            [fecha, cantidad, estado_adelanto, prov_cus_ID, estado, id]);
    }
    
    static deleteOneAdvance(id) {
        return db.execute(`DELETE FROM advances WHERE ad_ID = ?`, [id]);
    }

}