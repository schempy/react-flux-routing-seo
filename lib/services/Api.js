'use strict';

var request = require('superagent');
var ES6Promise = require('es6-promise').Promise;

/**
 * Wrapper for calling a API
 */
var Api = {
  get: function (url) {
    return new ES6Promise(function (resolve, reject) {
      request
        .get(url)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
};

module.exports = Api;
