const Partner = require('mongoose').model('Partner');

module.exports = {
    create: function(partner, callback) {
        Partner.create(partner, callback);
    }
};