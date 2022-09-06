const db = require('../util/database');

module.exports = class PurchaseDetail {

    constructor() {
    }

    static getLastPurchaseId() {
        return db.execute(`SELECT pu_ID FROM purchases WHERE pu_ID = (SELECT MAX(pu_ID) FROM purchases);`);
    }

}