const db = require('../util/database');

module.exports = class Providers {

    constructor(id, nombres, apellidos, razonsocial, ruc, email, celular, direccion, ciudad, estado, created_at, updated_at) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.razonsocial = razonsocial;
        this.ruc = ruc;
        this.email = email;
        this.celular = celular;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.estado = estado;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllProviders() {
        return db.execute(`SELECT * FROM providers`)
    }

    static addNewProvider(nombres, apellidos, razonsocial, ruc, email, celular, direccion, ciudad, estado, created_at, updated_at) {

        return db.execute(`INSERT INTO providers (prov_nombres, prov_apellidos, prov_razon_social, prov_ruc, prov_email, prov_celular, prov_direccion, prov_ciudad, prov_estado, prov_created_at, prov_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)`, [nombres, apellidos, razonsocial, ruc, email, celular, direccion, ciudad, estado, created_at, null]);
    }

    static editOneProvider(id, nombres, apellidos, razonsocial, ruc, email, celular, direccion, ciudad, estado, updated_at) {
        return db.execute(`UPDATE providers SET prov_nombres=?, prov_apellidos=?, prov_razon_social=?, prov_ruc=?, prov_email=?, prov_celular=?, prov_direccion=?, prov_ciudad=?, prov_estado=?, prov_updated_at=? WHERE prov_ID=?`, [nombres, apellidos, razonsocial, ruc, email, celular, direccion, ciudad, estado, updated_at, id]);
    }

    static deleteOneProvider(id) {
        return db.execute(`DELETE FROM providers WHERE prov_ID = ?`, [id]);
    }

}