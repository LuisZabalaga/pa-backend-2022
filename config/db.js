const mysql = require('mysql2');
const { db } = require('./config');

// try {

//     //Database conecction
//     const pool = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '123456',
//         database: 'padb',
//         port: '3306'
//     });

// } catch (err) {
//     console.log("Database Not Connected");
// }

 //Database conecction
 const pool = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port
});

module.exports = pool;