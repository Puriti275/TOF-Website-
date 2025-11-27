const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '#03222007Ae!',
    database: 'users_payments'
}).promise()

module.exports = pool;

const result = pool.query("SELECT * FROM users")
console.log(result)