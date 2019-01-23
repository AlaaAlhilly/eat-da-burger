const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '',
    password: '',
    database: 'burgers_db'
});
connection.connect(function(){
    console.log('connected to burger db');
});
module.exports = connection;