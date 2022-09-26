const db = require('../util/database');

module.exports = class Users {

    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    static getEmployeeForUser(usuario, contraseña) { 
        console.log(usuario, contraseña);
        return db.execute(`SELECT emp_nombres, emp_apellidos, emp_usuario, emp_rol_ID FROM employees WHERE emp_usuario=? AND emp_contraseña=?`, [usuario, contraseña]);
    }

}