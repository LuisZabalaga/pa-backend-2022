const db = require('../util/database');

module.exports = class LastSaleId {

    constructor() {
    }

    static getLastSaleId() {
        return db.execute(`SELECT sa_ID FROM sales WHERE sa_ID = (SELECT MAX(sa_ID) FROM sales);`);
    }

}