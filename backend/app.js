const ajv = require("aws-jwt-verify");
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

api.get('/validatejwt', async function (request) {
  // Verifier that expects valid access tokens:
  const verifier = ajv.CognitoJwtVerifier.create({
    userPoolId: "us-east-1_wReorndlT",
    tokenUse: "access",
    clientId: "2fr657m7c1s5trjo4du4snae8c",
  });

  try {
    const payload = await verifier.verify(
      request.queryString["token"]
    );
    console.log("Token is valid. Payload:", payload);
    return payload;
  } catch {
    console.log("Token not valid!");
    return null;
  }
});

module.exports = api;