const db = require('../util/database');

module.exports = class Reports {

    constructor(categoria) {
        this.categoria = categoria;
    }

    static getProductsForCategory(categoria) { 
        return db.execute(`CALL getAllProductsForCategory (?);`, [categoria]);
    }

}