const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '#03222007Ae!',
    database: 'users_payments'
}).promise()