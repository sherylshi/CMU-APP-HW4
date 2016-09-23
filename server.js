/** 
 * 
 */

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

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to APP Uber CMU!' });   
});

router.route('/cars') 
    .get(function(req, res){
        Car.find(function(err, cars){
            if(err){
                res.send(err);
            }else{
                res.json(cars);
            }
        });
    })
    .post(function(req, res){
        var car = new Car();
        car.license = req.body.license;

        car.save(function(err){
            if(err){
                res.send(err);
            }else{
                res.json({"message" : "Car Created", "car_created" : car});
            }
        });
    });

router.route('/cars/:car_id')
    .get(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.send(err);
            }else{
                res.json(car);
            }
        });        
    }).patch(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.send(err);
            }else{
                car.license = req.body.license;
                car.save(function(err){
                    if(err){
                        res.send(err);
                    }else{
                        res.json({"message" : "Car Updated", "car_created" : car});
                    }
                });
            }
        });
    }).delete(function(req, res){
        Car.remove({
            _id : req.params.car_id
        }, function(err, car){
            if(err){
                res.send(err);
            }else{
                res.json({"message" : "Car Deleted"});
            }
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Service running on port ' + port);

module.exports = app;