const mongoose = require('mongoose');

module.exports.init = function() {
    let partnerSchema = mongoose.Schema({
        name: { type: String, unique: true },
        officeAddresses: { type: Array},
        webAddress: {type: String}
    });

   

    let Partner = mongoose.model('Partner', partnerSchema);
};