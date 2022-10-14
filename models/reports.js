const db = require('../util/database');

module.exports = class Reports {

    constructor(categoria) {
        this.categoria = categoria;
    }

    static getProductsForCategory(categoria) { 
        return db.execute(`CALL getAllProductsForCategory (?);`, [categoria]);
    }

    static getTotalPurchaseForCategorieAndDate(categoria, inicial, final) { 
        return db.execute(`CALL getTotalPurchaseForCategorieAndDate (?, ?, ?);`, [categoria, inicial, final]);
    }

}