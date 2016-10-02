/** 
 * Mongoose Schema for the Entity Car
 * @author Clark Jeria
 * @version 0.0.3
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({
    license: {type: String, unique: true, required: true, maxlength:10},
    doorCount: {type: Number, min:1, max:8, required: true},
    make:  {type: String, required: true, maxlength:18},
    model:  {type: String, required: true, maxlength:18},  
    driver: { type: Schema.Types.ObjectId, ref: 'Driver', required:true}
});

module.exports = mongoose.model('Car', CarSchema);