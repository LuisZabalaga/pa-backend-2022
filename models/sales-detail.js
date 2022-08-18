const db = require('../util/database');

module.exports = class SalesDetail {

    constructor(id, boleta, fecha, producto, proveedor, peso, precio, subtotal, created_at, updated_at) {
        this.id = id;
        this.boleta = boleta;
        this.fecha = fecha;
        this.producto = producto;
        this.proveedor = proveedor;
        this.peso = peso;
        this.precio = precio;
        this.subtotal = subtotal;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getSalesDetailForId(id) {
        return db.execute(`CALL getSalesDetailForId(?)`, [id]);
    }

    static addAllSalesDetail() {
        return db.execute(`INSERT INTO sales_detail SELECT sal_ID, sal_prod_ID, sal_sa_ID, sal_peso, sal_precio, sal_subtotal, sal_created_at, sal_updated_at FROM sales_detail_temporary;`);
    }

    static deleteAllTemporarySalesDetail() {
        return db.execute(`DELETE FROM sales_detail_temporary;`);
    }

}