const db = require('../util/database');

module.exports = class TicketSale {

    constructor(ruc, serie, serie_numero, numero, boleta, boleta_final) {
        this.ruc = ruc;
        this.serie = serie;
        this.serie_numero = serie_numero;
        this.numero = numero;
        this.boleta = boleta;
        this.boleta_final = boleta_final;
    }

    static getAllTicketSale() {
        return db.execute(`SELECT tick_sal_ID, tick_sal_ruc, tick_sal_serie, tick_sal_serie_numero, tick_sal_numero, tick_sal_boleta, tick_sal_boleta_final FROM ticket_sale WHERE tick_sal_numero = (SELECT MAX(tick_sal_numero) FROM ticket_sale);`);
    } 

    static addNewTicketSale(ruc, serie, serie_numero, numero, boleta, boleta_final) {
        return db.execute(`INSERT INTO ticket_sale (tick_sal_ruc, tick_sal_serie, tick_sal_serie_numero, tick_sal_numero, tick_sal_boleta, tick_sal_boleta_final) VALUES (?, ?, ?, ?, ?, ?)`,
            [ruc, serie, serie_numero, numero, boleta, boleta_final]);
    }

}