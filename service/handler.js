'use strict';

const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials" : true
}
module.exports.hello = (event, context, callback) => {
    let response = Object.assign({}, headers, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
        });

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.perCapitaStateData = (event, context, callback) => {
  var file = "data/json/stateData.json";
  var fs = require("fs");
  var json = JSON.parse(fs.readFileSync(file));
  let response = Object.assign({}, { headers }, {
    statusCode: 200,
    body: JSON.stringify({
      data: json,
      input: event,
    }),
      });

  callback(null, response);
};


module.exports.perCapitaCountyData = (event, context, callback) => {
  var file = "data/json/countyData.json";
  var fs = require("fs");
  var json = JSON.parse(fs.readFileSync(file));
  var query = event.queryStringParameters;
  if (query.state) {
      for (var i in json) {
          if (json[i].state != query.state && json[i].shortName != query.state) {
              delete json[i];
          }
      }
  }
  let response = Object.assign({}, { headers }, {
    statusCode: 200,
    body: JSON.stringify({
      data: json,
      input: event,
    }),
      });

  callback(null, response);
};
