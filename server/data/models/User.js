const mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption'),
    requiredMessage = '{PATH} is required';

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        username: { type: String, required: requiredMessage, unique: true },
        firstName: String,
        lastName: String,
        salt: String,
        hashPass: String,
        age: { type: Number, default: 20 },
        gender: { type: String, default: 'Female' },
        email: {
            type: String,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            require: requiredMessage
        },
        about: { type: String, default: 'Write something about yourself' },
        image: { type: String, default: 'http://tr3.cbsistatic.com/fly/bundles/techrepubliccore/images/icons/standard/icon-user-default.png' },
        rating: { type: Number, default: 0 },
        createdOn: { type: Date, default: Date.now() }
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            } else {
                return false;
            }
        }
    });

    let User = mongoose.model('User', userSchema);
};