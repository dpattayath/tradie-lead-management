

/**
 * DB module that exports mysql connection object
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hipages'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;