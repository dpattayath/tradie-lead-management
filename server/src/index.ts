import * as express from 'express';

const app = express(),
    mysql = require('mysql'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// listen
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

var routes = require('./app/routes/api');
routes(app);
