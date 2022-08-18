const db = require('../util/database');

module.exports = class TemporarySalesDetail {

    constructor(id, producto, venta, peso, precio, subtotal, created_at, updated_at) {
        this.id = id;
        this.producto = producto;
        this.venta = venta;
        this.peso = peso;
        this.precio = precio;
        this.subtotal = subtotal;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllTemporarySalesDetail() {
        return db.execute(`CALL getAllSalesDetailTemporary;`);
    }

    static getTotalTemporarySalesDetail() {
        return db.execute(`SELECT IF(sal_subtotal IS NULL, 0, SUM(sal_subtotal)) as sal_total from sales_detail_temporary;`);
    }

    static addNewTemporarySaleDetail(producto, venta, peso, precio, subtotal, created_at, updated_at) {
        return db.execute(`INSERT INTO sales_detail_temporary (sal_prod_ID, sal_sa_ID, sal_peso, sal_precio, sal_subtotal, sal_created_at, sal_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [producto, venta, peso, precio, peso*precio, created_at, null]);
    }

    static addWeightProductForSales(peso_compra, producto) {
        return db.execute(`CALL addWeightProductForSales (?, ?)`, [peso_compra, producto]);
    }

    static diminishWeightProductForSales(peso_compra, producto) {
        return db.execute(`CALL diminishWeightProductForSales (?, ?)`, [peso_compra, producto]);
    }

    static deleteOneTemporarySaleDetail(id) {
        return db.execute(`DELETE FROM sales_detail_temporary WHERE sal_ID = ?`, [id]);
    }

}