**Homework due September 29, 2016**

**Part 1**

In this part of the exercise, you will identify error codes and error messages that will be part of the response body of your API if there's a problem
in fulfilling a request. the response body will look as below

```
{
    "statusCode" : 201,
    "errorCode" : 1234,
    "errorMessage" : "Invalid resource name cars"
}

```

Identify all possible error codes for each of the resources and consolidate them into a single table as below. Some 
examples of possible errors are below.

1. Invalid resource name
2. Identifier not matching any resource instance
3. Invalid property name (given in POST)
4. Invalid value for a property (given in POST)

Present your submission in the form a document with the following table. 

Error Code  | Error Message    | Relevant Resources  | Parameters
----------- | ----------|------------ |-----
 1001  | Invalid resource name {0} given  | All Resources  | `0 - Resource Name`
1002 | Given car does not exist | `cars` | None


**Part 2**


