/**
 * model class than handles operations related to job entity
 */

var db = require('../connectors/db');

// fetch all jobs
exports.get = function (result) {

    const query = "SELECT * FROM vw_jobs";

    db.query(query, function (err, rows, fields) {
        if (err) {
            result(null, err);
        }
        result(null, rows);
    });
};

// mark job as accepted
exports.accept = function (id, result) {

    db.query("UPDATE jobs SET status = 'accepted' WHERE id = ?", [id], function (err, res) {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// mark job as declined
exports.decline = function (id, result) {

    db.query("UPDATE jobs SET status = 'declined' WHERE id = ?", [id], function (err, res) {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });  
};