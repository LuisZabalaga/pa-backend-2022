const db = require('../util/database');

module.exports = class TemporaryPurchaseDetail {

    constructor(id, boleta, fecha, producto, proveedor, compra, peso, precio, subtotal, created_at, updated_at) {
        this.id = id;
        this.boleta = boleta;
        this.fecha = fecha;
        this.producto = producto;
        this.proveedor = proveedor;
        this.compra = compra;
        this.peso = peso;
        this.precio = precio;
        this.subtotal = subtotal;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllTemporaryPurchaseDetail() {
        return db.execute(`CALL getAllPurchaseDetailTemporary;`);
        // return db.execute(`SELECT * FROM purchase_detail_temporary`)
    }

    static getTotalTemporaryPurchaseDetail() {
        return db.execute(`SELECT IF(pur_subtotal IS NULL, 0, SUM(pur_subtotal)) as pur_total from purchase_detail_temporary;`);
    }

    static addNewTemporaryPurchaseDetail(producto, compra, peso, precio, subtotal, created_at, updated_at) {
        return db.execute(`INSERT INTO purchase_detail_temporary (pur_prod_ID, pur_pu_ID, pur_peso, pur_precio, pur_subtotal, pur_created_at, pur_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [producto, compra, peso, precio, peso*precio, created_at, null]);
    }

    static addWeightProductForPurchase(peso_compra, producto) {
        return db.execute(`CALL addWeightProductForPurchase (?, ?)`, [peso_compra, producto]);
    }

    static diminishWeightProductForPurchase(peso_compra, producto) {
        return db.execute(`CALL diminishWeightProductForPurchase (?, ?)`, [peso_compra, producto]);
    }

    static deleteOneTemporaryPurchaseDetail(id) {
        return db.execute(`DELETE FROM purchase_detail_temporary WHERE pur_ID = ?`, [id]);
    }

}