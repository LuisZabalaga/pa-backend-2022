const db = require('../util/database');

module.exports = class Roles {

    constructor(id, perfil, descripcion, created_at, updated_at) {
        this.id = id;
        this.perfil = perfil;
        this.descripcion = descripcion;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllRoles() {
        return db.execute(`SELECT * FROM roles`)
    }

    static addNewRole(perfil, descripcion, created_at, updated_at) {
        return db.execute(`INSERT INTO roles (rol_perfil, rol_descripcion, rol_created_at, rol_updated_at) VALUES (?, ?, ?, ?)`,
            [perfil, descripcion, created_at, null]);
    }

    static editOneRole(id, perfil, descripcion, updated_at) {
        return db.execute(`UPDATE roles SET rol_perfil=?, rol_descripcion=?, rol_updated_at=? WHERE typ_ID=?`,
            [perfil, descripcion, updated_at, id]);
    }

    static deleteOneRole(id) {
        return db.execute(`DELETE FROM roles WHERE rol_ID = ?`, [id]);
    }

}