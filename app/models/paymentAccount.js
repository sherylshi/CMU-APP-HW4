/** 
 * Mongoose Schema for the Entity PaymentAccount
 * @author Clark Jeria
 * @version 0.0.1
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PaymentAccountSchema   = new Schema({
    accountType: {type: String, required: true, maxlength: 18},
    accountNumber: {type: Number, required: true, max: 18},
    expirationDate: {type: Number },
    nameOnAccount: {type: String, required: true, maxlength: 18}, 
    bank: {type: String, maxlength: 18 },
    driver_id: { type: Schema.Types.ObjectId, ref: 'Driver' },
    passenger_id: {type: Schema.Types.ObjectId, ref: 'Passenger' }
});

module.exports = mongoose.model('PaymentAccount', PaymentAccountSchema);