const db = require('../util/database');

module.exports = class AdvancesCustomer {

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

    static getAdvanceForCustomerAndState(cliente) {
        return db.execute(`CALL getAdvanceForCustomerAndState (?);`, [cliente]);
    }

}