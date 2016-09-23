var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PassengerSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Passenger', PassengerSchema);