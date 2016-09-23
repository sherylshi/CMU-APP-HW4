/** 
 * Example of RESTful API using Express and NodeJS
 * @author Clark Jeria
 * @version 0.0.2
 */

/** BEGIN: Express Server Configuration */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mongoose    = require('mongoose');
mongoose.connect('mongodb://app_user:password@ds035826.mlab.com:35826/cmu_sv_app');

var Car = require('./app/models/car');
var Driver = require('./app/models/driver');
var Passenger = require('./app/models/passenger');

var router = express.Router();
/** END: Express Server Configuration */

/** BEGIN: Express Routes Definition */

/**
 * Initial route of the API for connection testing purpouses
 * @returns {object} A string message.
 */
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to APP Uber CMU!' });   
});

/** 
 * Express Route: /cars
 */
router.route('/cars') 
    /**
     * GET call for the car entity (multiple).
     * @returns {object} A list of cars. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        Car.find(function(err, cars){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(cars);
            }
        });
    })
    /**
     * POST call for the car entity.
     * @param {string} license - The license plate of the new car
     * @returns {object} A message and the car created. (201 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .post(function(req, res){
        var car = new Car();
        car.license = req.body.license;

        car.save(function(err){
            if(err){
                res.status(500).send(err);
            }else{
                res.status(201).json({"message" : "Car Created", "car_created" : car});
            }
        });
    });

/** 
 * Express Route: /cars/:car_id
 * @param {string} car_id - Id Hash of Car Object
 */
router.route('/cars/:car_id')
    /**
     * GET call for the car entity (single).
     * @returns {object} the car with Id car_id. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(car);
            }
        });  
    })
    /**
     * PATCH call for the car entity (single).
     * @returns {object} A message and the car updated. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .patch(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                car.license = req.body.license;
                car.save(function(err){
                    if(err){
                        res.status(500).send(err);
                    }else{
                        res.json({"message" : "Car Updated", "car_created" : car});
                    }
                });
            }
        });
    })
    /**
     * DELETE call for the car entity (single).
     * @returns {object} A string message. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .delete(function(req, res){
        Car.remove({
            _id : req.params.car_id
        }, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                res.json({"message" : "Car Deleted"});
            }
        });
    });

app.use('/api', router);
/** END: Express Routes Definition */

/** BEGIN: Express Server Start */
app.listen(port);
console.log('Service running on port ' + port);

module.exports = app;
/** END: Express Server Start */