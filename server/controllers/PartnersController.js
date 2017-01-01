let partner = require('../data/partner'),
    Partner = require('mongoose').model('Partner'),
    config = require('../config/database');

let CONTROLLER_NAME = 'partners';

function getAll(req, res) {
    Partner.find({}, function(err, partner) {
        if (err) {
            throw err;
        }

        if (!partner.length) {
            res.status(401).send({ err: 'No Partners.' });
        } else {
            res.status(200).json(partner);
        }
    });
}

function createPartner(req, res) {
    let newPartner = req.body;
    Partner.create(newPartner).then(res.send(newPartner));
}

module.exports = {
    getAll,
    createPartner
};