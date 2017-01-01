let places = require('../data/places'),
    Place = require('mongoose').model('Place'),
    config = require('../config/database');

let CONTROLLER_NAME = 'places';

function getAll(req, res) {
    Place.find({}, function(err, places) {
        if (err) {
            throw err;
        }

        if (!places.length) {
            res.status(401).send({
                err: 'No places.'
            });
        } else {
            res.status(200).json(places);
        }
    });
}

function getByName(req, res) {
    Place.find({
        name: req.params.name
    }, function(err, places) {
        if (err) {
            throw err;
        }

        if (!places.length) {
            res.status(401).send({
                err: 'No places.'
            });
        } else {
            res.status(200).json(places[0]);
        }
    });
}

function createPlace(req, res) {
    let newPlace = req.body;
    Place.create(newPlace).then(res.send(newPlace));
}

function updatePlace(req, res) {
    Place.findById(req.body._id, function(err, p) {
        if (!p)
            throw Error('Could not load Document');
        else {
            p.rating = req.body.rating;
            p.info = req.body.info;
            p.save().then(res.send(p));
        }
    });
}

function deleatePlace(req, res) {
    Place.findOneAndRemove({ name: req.params.name }).then(res.send({}));
}

module.exports = {
    getAll,
    createPlace,
    updatePlace,
    getByName,
    deleatePlace
};