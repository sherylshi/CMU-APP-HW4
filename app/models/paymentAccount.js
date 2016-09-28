/** 
 * Mongoose Schema for the Entity PaymentAccount
 * @author Clark Jeria
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PaymentAccountSchema   = new Schema({
    accountType: String,
    accountNumber: Number,
    expirationDate: Date,
    nameOnAccount: String, 
    bank: String
});

module.exports = mongoose.model('PaymentAccount', PaymentAccountSchema);