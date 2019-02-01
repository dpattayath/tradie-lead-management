
module.exports = function(app) {
    var jobctrl = require('../controllers/job');
    var homectrl = require('../controllers/home');

    app.route('/').get(homectrl.index);

    app.route('/jobs').get(jobctrl.index);

    app.route('/jobs/:id/accept').post(jobctrl.accept);

    app.route('/jobs/:id/decline').post(jobctrl.decline);
}