const db = require('../util/database');

module.exports = class PurchaseDetail {

    constructor(id) {
        this.id = id;
    }

    static getPurchaseDetailForId(id) {
        return db.execute(`CALL getPurchaseDetailForId(?)`, [id]);
    }

    static addAllPurchasesDetail() {
        return db.execute(`INSERT INTO purchase_detail SELECT pur_ID, pur_prod_ID, pur_pu_ID, pur_peso, pur_precio, pur_subtotal, pur_created_at, pur_updated_at FROM purchase_detail_temporary;`);
    }

    static deleteAllTemporaryPurchaseDetail() {
        return db.execute(`DELETE FROM purchase_detail_temporary;`);
    }

}