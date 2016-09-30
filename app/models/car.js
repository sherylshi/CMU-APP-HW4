/** 
 * Mongoose Schema for the Entity Car
 * @author Clark Jeria
 * @version 0.0.3
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({
    license: String,
    doorCount: Number,
    make: String,
    model: String,    
    driver: { type: Schema.Types.ObjectId, ref: 'Driver' }
});

module.exports = mongoose.model('Car', CarSchema);