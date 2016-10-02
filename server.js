/** 
 * Example of RESTful API using Express and NodeJS
 * @author Clark Jeria
 * @version 0.0.2
 */

/** BEGIN: Express Server Configuration */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var util = require('util');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mongoose    = require('mongoose');
mongoose.connect('mongodb://sherylshi:A!234567@ds041536.mlab.com:41536/sherylshi');
/** END: Express Server Configuration */

/** BEGIN: Express Routes Definition */
var router = require('./routes/router');
var cars = require('./routes/cars');
var drivers = require('./routes/drivers');
var passengers = require('./routes/passengers');
var paymentAccounts = require('./routes/paymentaccounts');
var rides = require('./routes/rides');

app.use('/api', cars);
app.use('/api', drivers);
app.use('/api', passengers);
app.use('/api', paymentAccounts);
app.use('/api', rides);
app.use('/api', router);

app.use("/*/:rname",function(req, res, next) {
  res.status(404).json(
    {
      "errorCode": "1001", 
      "errorMessage": util.format("Invalid Resource name %s given",req.params.rname), 
      "statusCode" : "404"
    });  
});
/** END: Express Routes Definition */

/** BEGIN: Express Server Start */
app.listen(port);
console.log('Service running on port ' + port);

module.exports = app;
/** END: Express Server Start */