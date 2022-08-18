const db = require('../util/database');
// const timestamp = new Date().getTime();

module.exports = class Customers {

    constructor(id, nombres, apellidos, dni, ruc, email, celular, direccion, ciudad, estado, created_at, updated_at) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.dni = dni;
        this.ruc = ruc;
        this.email = email;
        this.celular = celular;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.estado = estado;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllCustomers() {
        return db.execute(`SELECT * FROM customers`)
    }

    static addNewCustomer(nombres, apellidos, dni, ruc, email, celular, direccion, ciudad, estado, created_at, updated_at) {
        return db.execute('INSERT INTO customers (cus_nombres, cus_apellidos, cus_dni, cus_ruc, cus_email, cus_celular, cus_direccion, cus_ciudad, cus_estado, cus_created_at, cus_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)',
            [nombres, apellidos, dni, ruc, email, celular, direccion, ciudad, estado, created_at, null]);
    }


    static editOneCustomer(id, nombres, apellidos, dni, ruc, email, celular, direccion, ciudad, estado, updated_at) {
        return db.execute('UPDATE customers SET cus_nombres=?, cus_apellidos=?, cus_dni=?, cus_ruc=?, cus_email=?, cus_celular=?, cus_direccion=?, cus_ciudad=?, cus_estado=?, cus_updated_at=? WHERE cus_ID=?',
            [nombres, apellidos, dni, ruc, email, celular, direccion, ciudad, estado, updated_at, id]);
    }

    static deleteOneCustomer(id) {
        return db.execute('DELETE FROM customers WHERE cus_ID = ?', [id]);
    }

}