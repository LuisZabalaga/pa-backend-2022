const db = require('../util/database');

module.exports = class WeightProducts {

    constructor(id) {
        this.id = id;
    }

    static getAllWeightProducts() {
        return db.execute(`SELECT * FROM weight_products`)
    }

    static addWeightProductForId(id) {
        return db.execute(`CALL addWeightProductForId(?);`, [id]);
    }

    static deleteAllWeightProducts() {
        return db.execute(`DELETE FROM weight_products;`);
    }

    static deleteOneWeightProduct(id) {
        return db.execute(`DELETE FROM weight_products WHERE wei_prod_ID = ?;`, [id]);
    }

}