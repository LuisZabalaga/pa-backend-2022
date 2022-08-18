const mysql = require('mysql2');
const config = require('../config/config.json');

// const pool = mysql.createPool({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
//     port: config.port
// });

// module.exports = pool.promise();

const dbConexion = mysql.createPool ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
});

module.exports = dbConexion.promise();

// const dbConexion = mysql.createConnection ({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "padb",
//     port: "3306"
// });

// module.exports = dbConexion;