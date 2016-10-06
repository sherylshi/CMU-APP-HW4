#Test Result

Sherrills-MacBook:APPHW4 sherylshi$ ./node_modules/.bin/mocha -u exports tests
Service running on port 8080


  ✓ cars_delete_all_car (800ms)
Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
  ✓ cars01_should_create_car (438ms)
  ✓ cars02_should_get_car (214ms)
  ✓ cars03_should_delete_car (89ms)
  ✓ cars04_should_not_get_deleted_car (90ms)
  ✓ cars05_should_not_get_random_id_car
null
  ✓ cars06_should_not_create_car_missing_make
  ✓ cars07_should_not_create_car_with_long_make
  ✓ drivers_delete_all_driver (88ms)
  ✓ drivers01_should_create_driver (94ms)
  ✓ drivers02_should_get_driver (94ms)
  ✓ drivers03_should_delete_driver (98ms)
  ✓ drivers04_should_not_get_deleted_driver (88ms)
  ✓ drivers05_should_not_get_random_id_driver
  ✓ drivers06_should_not_create_driver_missing_email_address
  ✓ drivers07_should_not_create_driver_with_long_first_name
  ✓ passenger_delete_all_passenger (94ms)
  ✓ passengers01_should_create_passenger (92ms)
  ✓ passengers02_should_get_passenger (91ms)
  ✓ passengers03_should_delete_passenger (91ms)
  ✓ passengers04_should_not_get_deleted_passenger (96ms)
  ✓ passengers05_should_not_get_random_id_passenger
  ✓ passengers06_should_not_create_passenger_missing_email_address
  ✓ passengers07_should_not_create_passenger_with_long_first_name

  24 passing (3s)

```
#!javascript

# README # 

To Setup the Environment for the first time:
```
#!javascript

npm install
```
To Setup the Intellisense in VisualStudio Code:
```
#!javascript

typings install
```
To Run Tests:
```
#!javascript

./node_modules/.bin/mocha -u exports tests
```

### What is this repository for? ###

* Quick summary: Code Example for APP Class
* Version
0.0.2
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
