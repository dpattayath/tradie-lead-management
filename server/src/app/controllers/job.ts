
/**
 * controller handling all operations related to job
 */

var job = require('../models/job');

exports.index = function(req, res) {
    job.get(function(err, jobs) {
        if (err) {
            res.send(err);
        }
        res.json(jobs);
    });
} 

exports.accept = function(req, res) {
    job.accept(req.params.id, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
} 

exports.decline = function(req, res) {
    job.decline(req.params.id, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
} 