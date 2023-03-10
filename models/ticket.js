const db = require('../util/database');

module.exports = class Ticket {

    constructor(ruc, serie, serie_numero, numero, boleta, boleta_final) {
        this.ruc = ruc;
        this.serie = serie;
        this.serie_numero = serie_numero;
        this.numero = numero;
        this.boleta = boleta;
        this.boleta_final = boleta_final;
    }

    static getAllTicket() {
        return db.execute(`SELECT tick_ID, tick_ruc, tick_serie, tick_serie_numero, tick_numero, tick_boleta, tick_boleta_final FROM ticket WHERE tick_numero = (SELECT MAX(tick_numero) FROM ticket);`);
    }

    static addNewTicket(ruc, serie, serie_numero, numero, boleta, boleta_final) {
        return db.execute(`INSERT INTO ticket (tick_ruc, tick_serie, tick_serie_numero, tick_numero,tick_boleta, tick_boleta_final) VALUES (?, ?, ?, ?, ?, ?)`,
            [ruc, serie, serie_numero, numero, boleta, boleta_final]);
    }

}