/** 
 * Mongoose Schema for the Entity Driver
 * @author Clark Jeria
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DriverSchema   = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    licenseType: String, 
    username: String,
    emailAddress: String,
    password: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zip: Number,
    phoneNumber: Number,
    car: { type: ObjectId, ref: 'CarSchema' }
});

module.exports = mongoose.model('Driver', DriverSchema);