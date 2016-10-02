# Solution - Aroshi Handa - Assignment 4

Error Code  | Error Message | Relevant Resources  | Parameters | Example
| ----------- | ---------- | ------------ | ----- | ------
1001  | Invalid resource name {0} given  | All Resources  | `0 - Resource Name` | Invalid resource name `fruits` given
1002  | Given {0} does not exist   | All Resources  | `0 - Resource Name` | Given `car` does not exist
2001  | Car with {0} {1} does not exist  | `Cars`  | `0 - Property Name`, `1- Value` | Car with `make` `Apple` does not exist
2002  | Invalid {0} format for the given car  | `Cars`  | `0 - Property Name` | Invalid `doorCount` format for the given car
2003 | Invalid property {0} for the given car  | `Cars` | `0 - Property Name` | Invalid property `age` for the given car 
2004  | Property {0} is required for the given car  | `Cars`  | `0 - Property Name` | Property `license` is required for the given car
2005  | Given car already exists, duplicate key error  | `Cars`  | None | 
3001  | Driver with {0} {1} does not exist   | `Drivers`  | `0 - Property Name`, `1- Value` | Driver with `licensedState` `YO` does not exist
3002  | Invalid {0} format for the given driver   | `Drivers`  | `0 - Property Name` | Invalid `emailAddress` format for the given driver
3003 | Invalid property {0} for the given driver  | `Drivers` | `0 - Property Name` | Invalid property `age` for the given driver
3004  | Property {0} is required for the given driver  | `Drivers`  | `0 - Property Name` | Property `phoneNumber` is required for the given driver
3005  | Given driver already exists, duplicate key error  | `Drivers`  | None | 
4001  | Passenger with {0} {1} does not exist   | `Passengers`  | `0 - Property Name`, `1- Value` | Passenger with `emailAddress` `123@abc.com` does not exist
4002  | Invalid {0} format for the given passenger  | `Passengers`  | `0 - Property Name` | Invalid `emailAddress` format for the given passenger
4003 | Invalid property {0} for the given passenger  | `Passengers` | `0 - Property Name` | Invalid property `color` for the given passenger
4004  | Property {0} is required for the given passenger | `Passengers`  | `0 - Property Name` | Property `emailAddress` is required for the given passengers
4005  | Given passenger already exists, duplicate key error  | `Passengers`  | None | 

### Test Cases
```
Aroshis-MacBook-Pro:transportation-express-api aroshihanda$ ./node_modules/.bin/mocha -u exports tests
Service running on port 8080

  1) car_should_return_cars
[Error: expected 200 "OK", got 404 "Not Found"]
{ errorCode: '1002',
  errorMessage: 'Given car with id \'-1\' does not exist',
  statusCode: '404' }
  2) car_should_return_json
[Error: expected 200 "OK", got 404 "Not Found"]
{ errorCode: '1001',
  errorMessage: 'Invalid Resource name car given',
  statusCode: '404' }
  ✓ car_should_create_car
  3) car_create_action_should_retrieve_data

  1 passing (93ms)
  3 failing

```

### Screenshots

![File1](/screenshots/File1.png)
![File2](/screenshots/File2.png)
![File3](/screenshots/File3.png)
![File4](/screenshots/File4.png)
![File5](/screenshots/File5.png)
![File6](/screenshots/File6.png)
![File7](/screenshots/File7.png)
![File8](/screenshots/File8.png)
![File9](/screenshots/File9.png)
![File10](/screenshots/File10.png)
![File11](/screenshots/File11.png)
