const db = require('../util/database');

module.exports = class Categories {

    constructor(id, nombre, descripcion, created_at, updated_at) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllCategories() {
        return db.execute(`SELECT * FROM categories`)
    }

    static addNewCategorie(nombre, descripcion, created_at, updated_at) {
        return db.execute(`INSERT INTO categories (cat_nombre, cat_descripcion, cat_created_at, cat_updated_at) VALUES (?, ?, ?, ?)`,
            [nombre, descripcion, created_at, null]);
    }

    static editOneCategorie(id, nombre, descripcion, updated_at) {
        console.log(id, nombre, descripcion, updated_at);
        return db.execute(`UPDATE categories SET cat_nombre=?, cat_descripcion=?, cat_updated_at=? WHERE cat_ID=?`,
            [nombre, descripcion, updated_at, id]);
    }

    static deleteOneCategorie(id) {
        return db.execute(`DELETE FROM categories WHERE cat_ID = ?`, [id]);
    }

}