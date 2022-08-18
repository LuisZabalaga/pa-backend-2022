const db = require('../util/database');

module.exports = class Employees {

    constructor(id, nombres, apellidos, dni, email, celular, direccion, ciudad, estado, ingreso, rol, usuario, contraseña, created_at, updated_at) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.dni = dni;
        this.email = email;
        this.fecha = fecha;
        this.id = id;
        this.celular = celular;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.estado = estado;
        this.ingreso = ingreso;
        this.rol = rol;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static getAllEmployees() {
        return db.execute(`SELECT e.emp_ID, e.emp_nombres, e.emp_apellidos, e.emp_dni, e.emp_email, e.emp_celular, e.emp_direccion, e.emp_ciudad, e.emp_estado, e.emp_ingreso, e.emp_rol_ID, r.rol_ID, r.rol_perfil, e.emp_usuario, e.emp_contraseña, e.emp_created_at, e.emp_updated_at FROM employees e INNER JOIN roles r ON r.rol_ID = e.emp_rol_ID`)
    }

    static getAllEmployeesRoles() {
        return db.execute(`SELECT e.exp_ID, e.exp_cantidad, e.exp_typ_ID, e.exp_fecha, t.typ_ID, t.typ_gasto, e.exp_descripcion, e.exp_beneficiado, e.exp_emp_ID, em.emp_ID, em.emp_nombres, em.emp_apellidos FROM expenses e INNER JOIN employees em ON e.exp_emp_ID = em.emp_ID INNER JOIN type_expense t ON t.typ_ID = e.exp_typ_ID`)
    }

    static addNewEmployee(nombres, apellidos, dni, email, celular, direccion, ciudad, estado, ingreso, rol, usuario, contraseña, created_at, updated_at) {
        return db.execute(`INSERT INTO employees (emp_nombres, emp_apellidos, emp_dni, emp_email, emp_celular, emp_direccion, emp_ciudad, emp_estado, emp_ingreso, emp_rol_ID, emp_usuario, emp_contraseña, emp_created_at, emp_updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombres, apellidos, dni, email, celular, direccion, ciudad, estado, ingreso, rol, usuario, contraseña, created_at, null]);
    }

    static editOneEmployee(id, nombres, apellidos, dni, email, celular, direccion, ciudad, estado, ingreso, rol, usuario, contraseña, updated_at) {
        return db.execute(`UPDATE employees SET emp_nombres=?, emp_apellidos=?, emp_dni=?, emp_email=?, emp_celular=?, emp_direccion=?, emp_ciudad=?, emp_estado=?, emp_ingreso=?, emp_rol_ID=?, emp_usuario=?, emp_contraseña=?, emp_updated_at=? WHERE emp_ID=?`,
            [nombres, apellidos, dni, email, celular, direccion, ciudad, estado, ingreso, rol, usuario, contraseña, updated_at, id]);
    }

    static deleteOneEmployee(id) {
        return db.execute(`DELETE FROM employees WHERE emp_ID = ?`, [id]);
    }

}