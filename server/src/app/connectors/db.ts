

/**
 * DB module that exports mysql connection object
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'hipages',
    database: 'hipages',
    port: 3306
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;