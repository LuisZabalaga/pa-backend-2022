const db = require('../util/database');

module.exports = class Purchases {

    constructor(id, boleta, provedor, empleado, fecha, total_importe, adelanto, flete, total, inicial, final, created_at, updated_at) {
        this.id = id;
        this.boleta = boleta;
        this.provedor = provedor;
        this.empleado = empleado;
        this.fecha = fecha;
        this.total_importe = total_importe;
        this.adelanto = adelanto;
        this.flete = flete;
        this.total = total;
        this.inicial = inicial;
        this.final = final;
        this.created_at = created_at;
        this.updated_at = updated_at;

    }

    // static getAllPurchase() {
    //     return db.execute(`CALL getAllPurchases;`);
    // }
    static getAllPurchasesForDate(inicial, final) {
        return db.execute(`CALL getAllPurchasesForDate (?, ?);`, [inicial, final]);
    }  
 
    static getOnePurchaseForId(id) {
        return db.execute(`CALL getPurchaseForId(?);`, [id]);
    }    

    static addNewPurchase(boleta, proveedor, empleado, fecha, total_importe, adelanto, flete, total, created_at, updated_at) {
        if(flete === undefined ) {
            total = total_importe-adelanto;
            flete = 0;
        } else {
            total = total_importe-adelanto-flete;
        }

        if (total < 0) {
            total = 0;
        }
        
        return db.execute(`INSERT INTO purchases (pu_boleta, pu_prov_ID, pu_emp_ID, pu_fecha, pu_total_importe, pu_adelanto, pu_flete, pu_total, pu_created_at, pu_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [boleta, proveedor, empleado, fecha, total_importe, adelanto, flete, total, created_at, null]);
    }

    // static editOnePurchase(id, boleta, empleado, fecha, total, updated_at) {
    //     return db.execute(`UPDATE purchases SET pu_boleta=?, pu_emp_ID=?, pu_fecha=?, pu_total=?, exp_updated_at=? WHERE pu_ID=?`,
    //         [boleta, empleado, fecha, total, updated_at, id]);
    // }

    static deleteOnePurchase(id) {
        return db.execute(`DELETE FROM purchases WHERE pu_ID = ?`, [id]);
    }

}