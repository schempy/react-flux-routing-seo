'use strict';

var request = require('superagent');
var Promise = require('es6-promise').Promise; // jshint ignore:line

/**
 * Wrapper for calling a API
 */
var Api = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
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
