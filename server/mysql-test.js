var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hipages",
  database: "hipages",
  port: 3307
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
  con.query("SELECT * from vw_jobs", function (err, rows, fields) {
    console.log(rows);
  });
});

// con.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
//   if(err) console.log('err: ', err);
//   else console.log('Terminated done: ');
// });
