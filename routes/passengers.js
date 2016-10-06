/** 
 * Express Route: /passengers
 * @author Clark Jeria
 * @version 0.0.3
 */
var express = require('express');
var router = express.Router();
var util = require('util');

var Passenger = require('../app/models/passenger');
var mongoose = require('mongoose');
// var Driver = require('../app/models/driver');
// var PaymentAccount = require('../app/models/paymentaccount');

// router.route('/passenger/:passenger_id/paymentaccount')
//     .post(function (req, res) {
//         Passenger.findById(req.params.passenger_id, function (err, passenger) {
//             if (err) {
//                 res.status(500).send(err);
//                 return;
//             }
//             var account = new PaymentAccount(req.body);

//             if(!account.expirationDate) {
//                 res.status(400).json({
//                     "errorCode": "5006", 
//                     "errorMessage": "passenger requires expirationDate"
//                 });
//                 return ;
//             }
//             account.passenger_id = req.params.passenger_id;
//             account.save(function (err) {
//                 if (err) {
//                     res.status(500).send(err);
//                     return;
//                 }
//                 res.status(201).json({ "message": "PaymentAccount Created", "paymentAccountCreated": account });
//             });
//         })
//     });



function isRequestValid(mKeys,req,res){
    var schemaKeys = [];
    Passenger.schema.eachPath(function(path){
        if(path!="_id" && path!="__v")
            schemaKeys.push(path.toString());
    });

    for (var i = 0, len = Object.keys(mKeys).length; i < len; i++) {
            var element = Object.keys(mKeys)[i].toString();
            if(schemaKeys.indexOf(element)<0){
                    res.status(400).json({
                    "errorCode": "4003", 
                    "errorMessage": util.format("Invalid property %s for the given passenger",element), 
                    "statusCode" : "400"
                })
                return 0;
            }
    }
    return 1;
}

router.route('/passengers') 
    /**
     * GET call for the passenger entity (multiple).
     * @returns {object} A list of passengers. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        /**
         * Add extra error handling rules here
         */
    Passenger.find(function(err, passengers){
        var queryParam = req.query;
            if(err){
                res.status(500).send(err);
            }else{
                if(queryParam != 'undefined' || queryParam !=null)
                {  
                    if(isRequestValid(queryParam,req,res)!=1){
                        return;
                    }

                    Passenger.find(queryParam).exec(function(err,passengerM){
                        if(passengerM == undefined){
                             res.status(400).json({
                                "errorCode": "4002", 
                                "errorMessage": util.format("Invalid %s format for the given passenger",Object.keys(queryParam)), 
                                "statusCode" : "400"
                            })
                            return;
                        }
                        if(passengerM.length < 1){
                           res.status(404).json({
                             "errorCode": "4001", 
                             "errorMessage": util.format("Passenger with attribute %s does not exist",JSON.stringify(queryParam)), 
                             "statusCode" : "404"
                            })
                            return;
                        }
                        else{
                           var fixPassengers = [];
                            for(var index in passengerM){
                                var tempPassenger = passengerM[index];
                                tempPassenger['password'] = null;
                                fixPassengers.push(tempPassenger);
                            }
                            res.json(fixPassengers);
                        }
                    });
                }
                else{
                   var fixPassengers = [];
                    for(var index in passengers){
                        var tempPassenger = passengers[index];
                        tempPassenger['password'] = null;
                        fixPassengers.push(tempPassenger);
                    }
                    res.json(fixPassengers);
                }
            }
         });
    })
    /**
     * POST call for the passenger entity.
     * @param {string} firstName - The first name of the new passenger
     * @param {string} lastName - The last name of the new passenger
     * @param {date} dateOfBirth - The date of birth of the new passenger
     * @param {string} username - The username of the new passenger
     * @param {string} password - The password of the new passenger
     * @param {string} addressLine1 - The address line 1 of the new passenger
     * @param {string} addressLine2 - The address line 2 of the new passenger
     * @param {string} city - The city of the new passenger
     * @param {string} state - The state of the new passenger
     * @param {number} zip - The zip code of the new passenger
     * @param {number} phoneNumber - The phone number of the new passenger
     * @returns {object} A message and the passenger created. (201 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .post(function(req, res){
        /**
         * Add aditional error handling here
         */

        var passenger = new Passenger();
        passenger.firstName = req.body.firstName;
        passenger.lastName = req.body.lastName;
        passenger.dateOfBirth = req.body.dateOfBirth;
        passenger.username = req.body.username;
        passenger.emailAddress = req.body.emailAddress;
        passenger.password = req.body.password;
        passenger.addressLine1 = req.body.addressLine1;
        passenger.addressLine2 = req.body.addressLine2;
        passenger.city = req.body.city;
        passenger.state = req.body.state;
        passenger.zip = req.body.zip;
        passenger.phoneNumber = req.body.phoneNumber;

        passenger.save(function(err){
            if(err){
                if(Object.keys(err).indexOf('errmsg')>0){
                    res.status(400).json({
                        "errorCode": "4005", 
                        "errorMessage": "Given passenger already exists, Duplicate key error", 
                        "details": err.errmsg,
                        "statusCode" : "400"
                    })
                    return;
                }
                else if(Object.keys(err).indexOf('errors')>0){
                    var errorKey = Object.keys(err.errors)[0];
                    var errorObj = err.errors[errorKey];
                    if(errorObj.kind == 'required'){
                        res.status(400).json({
                            "errorCode": "4004", 
                            "errorMessage": util.format("Property '%s' is required for the given passenger", errorKey), 
                            "statusCode" : "400"
                        })
                        return;
                    }
                    else if(errorObj.name == 'CastError'){
                        res.status(400).json({
                            "errorCode": "4003", 
                            "errorMessage": util.format("Invalid %s for the given passenger", errorKey), 
                            "statusCode" : "400"
                        })
                        return;
                    }
                    else if(errorObj.name == 'ValidatorError'){
                        res.status(400).json({
                            "errorCode": "4002", 
                            "errorMessage": util.format("Validation for property %s for the given passenger failed", errorKey),
                            "description": errorObj.message, 
                            "statusCode" : "400"
                        })
                        return;
                    }
                    else{
                        res.status(400).json({
                            "errorCode": "4002", 
                            "errorMessage": util.format("Invalid passenger object"),
                            "description": errorObj.message, 
                            "statusCode" : "400"
                        })
                        return;
                   }
                }

                res.status(500).send(err);
                return;
            }
            res.json(passenger);
        });
    })

    .delete(function(req,res){
            Passenger.remove({}, function(err, passenger){
                if(err){
                    //res.status(500).send(err);
                    res.status(404).json({
                        "errorCode": "1002", 
                        "errorMessage": "Error deleting passenger",
                        "statusCode" : "404"
                    })
                }else{
                    res.json({"message" : "All passenger were deleted"});
                }
            });
    });

/** 
 * Express Route: /passengers/:passenger_id
 * @param {string} passenger_id - Id Hash of passenger Object
 */
router.route('/passengers/:passenger_id')
    /**
     * GET call for the passenger entity (single).
     * @returns {object} the passenger with Id passenger_id. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        /**
         * Add extra error handling rules here
         */
        Passenger.findById(req.params.passenger_id, function(err, passenger){
            if(err){
                //res.status(500).send(err);
                    res.status(404).json({
                        "errorCode": "1002", 
                        "errorMessage": util.format("Given passenger with id '%s' does not exist",req.params.passenger_id), 
                        "statusCode" : "404"
                    })
            }else{
                if (passenger == null || passenger == 'undefined') {
                    res.status(404).send({
                        "errorCode": "1002",
                        "errorMessage": util.format("Given passenger does not exist"),
                        "statusCode": "404"
                    });
                    return;
                }
                else if (Object.keys(passenger).length<0){
                    res.status(404).send({
                        "errorCode": "1002",
                        "errorMessage": util.format("Given passenger does not exist"),
                        "statusCode": "404"
                    })
                    return;
                }
                else{
                    var tempPassenger = passenger;
                    tempPassenger['password'] = null;
                    res.json(tempPassenger);
                }
            }
        });  
    })
    /**
     * PATCH call for the passenger entity (single).
     * @param {string} firstName - The first name of the new passenger
     * @param {string} lastName - The last name of the new passenger
     * @param {date} dateOfBirth - The date of birth of the new passenger
     * @param {string} username - The username of the new passenger
     * @param {string} password - The password of the new passenger
     * @param {string} addressLine1 - The address line 1 of the new passenger
     * @param {string} addressLine2 - The address line 2 of the new passenger
     * @param {string} city - The city of the new passenger
     * @param {string} state - The state of the new passenger
     * @param {number} zip - The zip code of the new passenger
     * @param {number} phoneNumber - The phone number of the new passenger
     * @returns {object} A message and the passenger updated. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .patch(function(req, res){
        /**
         * Add aditional error handling here
         */
        Passenger.findById(req.params.passenger_id, function(err, passenger){
            if(err){
                res.status(500).send(err);
            }else{
                for(var key in req.body) {
                    if(req.body.hasOwnProperty(key)){
                        passenger[key]=req.body[key];
                    }
                }

                passenger.save(function(err){
                    if(err){
                        //console.log(err);
                            if(Object.keys(err).indexOf('errors')>0){
                                var errorKey = Object.keys(err.errors)[0];
                                var errorObj = err.errors[errorKey];
                                if(errorObj.kind == 'required'){
                                    res.status(400).json({
                                        "errorCode": "4004", 
                                        "errorMessage": util.format("Property '%s' is required for the given passenger", errorKey), 
                                        "statusCode" : "400"
                                    })
                                }
                                else if(errorObj.name == 'CastError'){
                                    res.status(400).json({
                                        "errorCode": "4003", 
                                        "errorMessage": util.format("Invalid %s for the given passenger", errorKey), 
                                        "statusCode" : "400"
                                    })
                                }
                            }
                            else
                                res.status(500).send(err);
                    }else{
                        res.json({"message" : "Passenger Updated", "passengerUpdated" : passenger});
                    }
                });
            }
        });
    })
    /**
     * DELETE call for the passenger entity (single).
     * @returns {object} A string message. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .delete(function(req, res){
        /**
         * Add extra error handling rules here
         */
        Passenger.remove({
            _id : req.params.passenger_id
        }, function(err, passenger){
            if(err){
               // res.status(500).send(err);
               res.status(404).json({
                        "errorCode": "1002", 
                        "errorMessage": util.format("Given passenger with id '%s' does not exist",req.params.passenger_id), 
                        "statusCode" : "404"
                    })
            }else{
                res.json({"message" : "Passenger Deleted"});
            }
        });
    });

module.exports = router;