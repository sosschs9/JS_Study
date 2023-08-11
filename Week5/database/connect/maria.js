const maria = require('mysql');

const conn = maria.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '1234',
    database: 'springboot'
});

module.exports = conn;