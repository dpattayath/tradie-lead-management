import * as express from 'express';

const app = express();
const port = 8080;
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res, next) {
    res.send("Welcome to hipages test!!");
});

app.get('/jobs', function(req, res, next) {


    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'hipages'
    });
    
    connection.connect();
    
    const query = "SELECT * FROM vw_jobs";

    connection.query(query, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    });

    connection.end();

});

app.post('/jobs/:id/accept', function(req, res, next) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'hipages'
    });

    connection.connect();
    
    var query = 'UPDATE jobs set status = \'accepted\' WHERE id = ' + req.params.id;

    connection.query(query, {'id': req.params.id});

    query = "SELECT * FROM vw_jobs";

    connection.query(query, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    });

    connection.end();

});

app.post('/jobs/{id}/decline', function(req, res, next) {
    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'hipages'
    });

    connection.connect();
    
    var query = 'UPDATE jobs set status = \'declined\' WHERE id = ' + req.params.id;

    connection.query(query);

    query = "SELECT * FROM vw_jobs";

    connection.query(query, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    });

    connection.end();

});


// listen
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
