
const Api  = require('claudia-api-builder');
const AWS = require('aws-sdk');

var api = new Api();
var dynamoDb = new AWS.DynamoDB.DocumentClient();


api.get('/hello', function () {
  return 'hello world';
});

api.get('/greet', function (request) {
  var superb = require('superb');
  return request.queryString.name + ' is ' + superb.random();
});

api.get('/forum', function (request) { // GET all forums
  return dynamoDb.scan({ TableName: 'LetsGoForum' }).promise()
      .then(response => response.Items)
});

module.exports = api;