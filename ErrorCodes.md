Error Code  | Error Message | Relevant Resources  | Parameters | Example
| ----------- | ---------- | ------------ | ----- | ------
1001  | Invalid resource {0} given  | All Resources  | `0 - Resource Name` | Invalid resource `car` given
1002  | Given {0} does not exist   | All Resources  | `0 - Resource Name` | Given carid does not exist
2001  | Car's {0} with {1} does not exist | `Cars`  | `0 - Property Name`, `1 - Value` | Car's `model` with `Good` does not exist
2002  | Invalid {0} format for the given car  | `Cars`  | `0 - Property Name` | Invalid `doorCount` format for the given car
2003  | Invalid property {0} for the given car  | `Cars` | `0 - Property Name` | Invalid property `color` for the given car 
2004  | Property {0} is required for the given car  | `Cars`  | `0 - Property Name` | Property `license` is required for the given car
2005  | Given car already exists, duplicate key error  | `Cars`  | None | 
3001  | Driver's {0} with {1} does not exist   | `Drivers`  | `0 - Property Name`, `1- Value` | Driver's `firstname` with `Joke` does not exist
3002  | Invalid {0} format for the given driver   | `Drivers`  | `0 - Property Name` | Invalid `emailAddress` format for the given driver
3003  | Invalid property {0} for the given driver  | `Drivers` | `0 - Property Name` | Invalid property `gender` for the given driver
3004  | Property {0} is required for the given driver  | `Drivers`  | `0 - Property Name` | Property `emailAddress` is required for the given driver
3005  | Given driver already exists, duplicate key error  | `Drivers`  | None | 
4001  | Passenger's {0} with {1} does not exist   | `Passengers`  | `0 - Property Name`, `1- Value` | Passenger's `firstname` with `Joke` does not exist
4002  | Invalid {0} format for the given passenger  | `Passengers`  | `0 - Property Name` | Invalid `emailAddress` format for the given passenger
4003  | Invalid property {0} for the given passenger  | `Passengers` | `0 - Property Name` | Invalid property `gender` for the given passenger
4004  | Property {0} is required for the given passenger | `Passengers`  | `0 - Property Name` | Property `emailAddress` is required for the given passenger
4005  | Given passenger already exists, duplicate key error  | `Passengers`  | None | 
5001  | Paymentaccount's {0} with {1} does not exist   | `Paymentaccounts`  | `0 - Property Name`, `1- Value` | Paymentaccount's `accountType` with `ABC` does not exist
5002  | Invalid {0} format for the given paymentaccount  | `Paymentaccounts`  | `0 - Property Name` | Invalid `accontNumber` format for the given paymentaccount
5003  | Invalid property {0} for the given paymentaccount  | `Paymentaccounts` | `0 - Property Name` | Invalid property `free` for the given paymentaccount
5004  | Property {0} is required for the given paymentaccount | `Paymentaccounts`  | `0 - Property Name` | Property `accountNumber` is required for the given paymentaccount
5005  | Given paymentaccount already exists, duplicate key error  | `Paymentaccounts`  | None | 
5006  | driver requires expirationDate  | `Paymentaccounts`  | None | 
5007  | passenger requires bank | `Paymentaccounts`  | None | 