const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    config = require('./server/config/database'), // get db config file
    User = require('./server/data/models/User'), // get the mongoose model
    port = process.env.PORT || 3000,
    jwt = require('jwt-simple'),
    path = require('path');

// Allow CORS
app.use(express.static(__dirname + "/dist"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
});

// get our request parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());

// connect to database
mongoose.connect(config.database);
let UserModel = require('./server/data/models/User');
let PlaceModel = require('./server/data/models/Place');
let PartnerModel = require('./server/data/models/Partner');
UserModel.init();
PlaceModel.init();
PartnerModel.init();

// pass passport for configuration
require('./server/config/passport')(passport);

// bundle our routes
var apiRoutes = express.Router();

let usersController = require('./server/controllers/UsersController');
let placesContproller = require('./server/controllers/PlacesController');
let PartnersController = require('./server/controllers/PartnersController');
// create a new user account (POST http://localhost:3000/api/signup)
apiRoutes.post('/signup', usersController.postRegister);
apiRoutes.post('/authenticate', usersController.postAuthenticate);
apiRoutes.get('/users', usersController.getAll);
apiRoutes.get('/users/:username', usersController.getByUsername);
apiRoutes.put('/users/:username', usersController.updateUser);
apiRoutes.get('/places', placesContproller.getAll);
apiRoutes.get('/places/:name', placesContproller.getByName);
apiRoutes.post('/places', placesContproller.createPlace);
apiRoutes.put('/places', placesContproller.updatePlace);
apiRoutes.delete('/places/:name', placesContproller.deleatePlace);
apiRoutes.get('/partners', PartnersController.getAll);
apiRoutes.post('/partners', PartnersController.createPartner);

// connect the api routes under /api/*
app.use('/api', apiRoutes);
app
    .get('/', function(req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/dist/index.html'));
    })
    .get('*', function(req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/dist/index.html'));
    });

// Start the server
app.listen(port);
console.log('Server is running at: http://localhost:' + port);