var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({
    license: String
});

module.exports = mongoose.model('Car', CarSchema);