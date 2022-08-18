const db = require('../util/database');

module.exports = class Sales {

    constructor(id, boleta, cliente, empleado, fecha, total_importe, adelanto, total, inicial, final, created_at, updated_at) {
        this.id = id;
        this.boleta = boleta;
        this.cliente = cliente;
        this.empleado = empleado;
        this.fecha = fecha;
        this.total_importe = total_importe;
        this.adelanto = adelanto;
        this.total = total;
        this.inicial = inicial;
        this.final = final;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllSalesForDate(inicial, final) {
        return db.execute(`CALL getAllSalesForDate(?, ?);`, [inicial, final]);
    }

    static getOnesaleForId(id) {
        return db.execute(`CALL getSaleForId(?);`, [id]);
    }    

    static addNewSale(boleta, cliente, empleado, fecha, total_importe, adelanto, total, created_at, updated_at) {
        if(adelanto === undefined ) {
            total = total_importe;
            adelanto = 0;
        } else {
            total = total_importe-adelanto;
        }

        if (total < 0) {
            total = 0;
        }
        
        return db.execute(`INSERT INTO sales (sa_boleta, sa_cus_ID, sa_emp_ID, sa_fecha, sa_total_importe, sa_adelanto, sa_total, sa_created_at, sa_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [boleta, cliente, empleado, fecha, total_importe, adelanto, total, created_at, null]);
    }

    // static editOneSale(id, boleta, empleado, fecha, total, updated_at) {
    //     return db.execute(`UPDATE sales SET pu_boleta=?, pu_emp_ID=?, pu_fecha=?, pu_total=?, exp_updated_at=? WHERE pu_ID=?`,
    //         [boleta, empleado, fecha, total, updated_at, id]);
    // }

    static deleteOneSale(id) {
        return db.execute(`DELETE FROM sales WHERE sa_ID = ?`, [id]);
    }

}