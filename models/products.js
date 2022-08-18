const db = require('../util/database');

module.exports = class Products {

    constructor(id, nombre, descripcion, peso_total, peso_aqp, peso_local, imagen, categoria_id, created_at, updated_at) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.peso_total = peso_total;
        this.peso_aqp = peso_aqp;
        this.peso_local = peso_local;
        this.imagen = imagen;
        this.categoria_id = categoria_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllProducts() {
        return db.execute(`SELECT * FROM products`)
    }

    static getAllProductsCategorie() {
        return db.execute(`SELECT p.prod_ID, p.prod_nombre, p.prod_descripcion, p.prod_peso_total, p.prod_peso_aqp, p.prod_peso_local, p.prod_imagen, c.cat_ID, c.cat_nombre, p.prod_cat_ID, p.prod_created_at, p.prod_updated_at FROM products p INNER JOIN categories c ON c.cat_ID = p.prod_cat_ID`)
    }

    static addNewProduct(nombre, descripcion, peso_total, peso_aqp, peso_local, imagen, categoria_id, created_at, updated_at) {
        if (peso_total === undefined) {
            peso_total = 0;
        }
        return db.execute(`INSERT INTO products (prod_nombre, prod_descripcion, prod_peso_total, prod_peso_aqp, prod_peso_local, prod_imagen, prod_cat_ID, prod_created_at, prod_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [nombre, descripcion, peso_total, peso_total, peso_total, imagen, categoria_id, created_at, null]);
    }


    static editOneProduct(id, nombre, descripcion, peso_total, peso_aqp, peso_local, imagen, categoria_id, updated_at) {
        return db.execute(`UPDATE products SET prod_nombre=?, prod_descripcion=?, prod_peso_total=?, prod_peso_aqp=?, prod_peso_local=?, prod_imagen=?, prod_cat_ID=?, prod_updated_at=? WHERE prod_ID=?`,
            [nombre, descripcion, peso_total, peso_aqp, peso_local, imagen, categoria_id, updated_at, id]);
    }

    static deleteOneProduct(id) {
        return db.execute(`DELETE FROM products WHERE prod_ID = ?`, [id]);
    }

}