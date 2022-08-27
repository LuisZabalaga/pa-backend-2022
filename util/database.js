const mysql = require('mysql2');
const config = require('../config/config.json');

//mysql://b2206e74a45685:e3e2793d@us-cdbr-east-06.cleardb.net/heroku_e75b8d5ea99bdab?reconnect=true

//BASE DE DATOS EN HEROKU
// const dbConexion = mysql.createPool ({
//     host: 'us-cdbr-east-06.cleardb.net',
//     user: 'b2206e74a45685',
//     password: 'e3e2793d',
//     database: 'heroku_e75b8d5ea99bdab',
// });

// module.exports = dbConexion.promise();

//BASE DE DATOS EN CLEVER CLOUD
const dbConexion = mysql.createPool ({
    host: 'bbpf2pjrdlhltuznbylx-mysql.services.clever-cloud.com',
    user: 'ut39l7ebph2yz1mv',
    password: 'neT23pQfSj3Mcqv6XHqk',
    database: 'bbpf2pjrdlhltuznbylx',
    port: '3306'
});

module.exports = dbConexion.promise();


// FUNCIONA SOLO EN EL SERVIDOR LOCAL
// const dbConexion = mysql.createPool ({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
//     port: config.port
// });

// module.exports = dbConexion.promise();

// NO SE USA AHORA TAMPOCO
// const pool = mysql.createPool({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
//     port: config.port
// });

// module.exports = pool.promise();


// NO SE USA AHORA
// const dbConexion = mysql.createConnection ({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "padb",
//     port: "3306"
// });

// module.exports = dbConexion;