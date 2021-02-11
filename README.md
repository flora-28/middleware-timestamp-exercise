# Middleware Timestamp Exercise
Make a middleware to detect the status of the server receiving the request.

![index-img](https://raw.githubusercontent.com/flora-28/middleware-timestamp-exercise/master/public/photos/time-response.jpg)

## Features
When the server receive any request from the browser, it will automatically record the information in the server log, including:
1. Time stamps (time-stamps) - display in local time (Taipei)
2. HTTP method of the request
3. URL
4. Time response

## Getting Started
Clone repository to your local computer
```
$ git clone https://github.com/flora-28/middleware-timestamp-exercise.git
```
Install by npm
```
$ npm install
```
Execute
```
$ npm run dev 
```
Terminal show the message
```
App running on port 3000
```
## Build With
+ Node.js: v10.15.0
+ Express: v4.17.1
+ Express-Timestamp: v0.1.4
+ Moment: v2.29.1