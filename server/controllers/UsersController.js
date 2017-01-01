let encryption = require('../utilities/encryption'),
    jwt = require('jwt-simple'),
    users = require('../data/users'),
    User = require('mongoose').model('User'),
    config = require('../config/database');

let CONTROLLER_NAME = 'users';

function postRegister(req, res) {
    let newUserData = req.body;

    newUserData.salt = encryption.generateSalt();
    newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
    users.create(newUserData, function(err, user) {
        if (err) {
            return res.status(409).json({ success: false, msg: { code: err.code, message: err.message } });
        } else {
            return postAuthenticate(req, res);
        }
    });
}

function postAuthenticate(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            throw err;
        }

        if (!user) {
            res.status(401).send({ err: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            if (user.authenticate(req.body.password)) {
                // if user is found and password is right create a token
                let token = jwt.encode(user, config.secret);
                // return the information including token as JSON
                return res.json({ success: true, user: user, token: 'JWT ' + token });
            } else {
                res.status(401).send({ err: 'Authentication failed. Wrong password.' });
            }
        }
    });
}

function getAll(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            throw err;
        }

        if (!users.length) {
            res.status(401).send({ err: 'No users.' });
        } else {
            res.status(200).json(users);
        }
    });
}

function getSingleUserData(req, res) {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) console.log(err);
        if (!user) return res.json({ success: false, message: "User not found." });
        return res.json({
            success: true,
            result: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id,
                age: user.age,
                gender: user.gender,
                email: user.email,
                about: user.about,
                image: user.image,
                rating: user.rating,
                createdOn: user.createdOn
            }
        });
    });
}

function getByUsername(req, res) {
    User.find({
        username: req.params.username
    }, function(err, users) {
        if (err) {
            throw err;
        }

        if (!users.length) {
            res.status(401).send({
                err: 'No users.'
            });
        } else {
            res.status(200).json(users[0]);
        }
    });
}

function updateUser(req, res) {
    User.find({ username: req.params.username }, function(err, u) {
        if (!u.length)
            throw Error('Could not load Document');
        else {
            u[0].image = req.body.image;
            u[0].about = req.body.about;
            u[0].email = req.body.email;
            u[0].save().then(res.send(u[0]));
        }
    });
}

module.exports = {
    postRegister,
    postAuthenticate,
    getAll,
    getSingleUserData,
    updateUser,
    getByUsername
};