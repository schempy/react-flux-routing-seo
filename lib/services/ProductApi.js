'use strict';

var ServerActionCreators = require('../actions/ServerActionCreators');
var Api = require('./Api');

/**
 * Wrapper for calling a API
 */
var ProductApi = {

  requestProducts: function(category) {
    Api
      .get('/api/products/' + category)
      .then(function(products) {
        ServerActionCreators.handleProductsSuccess(products);
      })
      .catch(function(err) {
        ServerActionCreators.handleProductsError(err);
      });
  }

};

module.exports = ProductApi;
