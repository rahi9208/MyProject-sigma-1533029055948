let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("My P 5 My Okay");
    callback(null,'Successfully executed 5');
}