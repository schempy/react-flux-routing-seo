'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var SearchStore = require('../stores/SearchStore');
var Promise = require('es6-promise').Promise; // jshint ignore:line
var Api = require('../services/Api');

/**
 * Call API to get products based on a category. Only call
 * the API if the category being passed is different
 * from the category in the SearchStore.
 *
 * If the category being passed is the same as the category
 * in the SearchStore get the products from the SearchStore.
 *
 * @param {string} category
 */
function _loadProducts(category) {
  if (SearchStore.getCategory() !== category) {
    return Api
      .get('/api/products/' + category);
  } else {
    return new Promise(function (resolve, reject) {
      resolve(SearchStore.getProducts());
    });
  } 
}

/**
 * Dispatch a payload containing the new state.
 *
 * @param {object} data The details of the payload.
 */
function _handleAction (data) {
  Dispatcher.handleViewAction({
    actionType: ActionTypes.SET_STATE,
    data: data
  });
}

var SearchActions = {
  /**
   * Handle setting the state of the application.
   *
   * @param {object} data Includes the URL parameters from a route, stored
   * in data.params. Also includes the JSON created from the server,
   * data.state, which is the state the application was initialized
   * with server side.
   */
  setState: function (data) {
    var category = data.params.category || '';

    // Let's get products if there is no category in state or
    // there is a category in the URL paramters.
    if (SearchStore.getCategory().length > 0 || category.length > 0) {

      // There are paramters from the URL. Get products
      // based on a category.
      if (data.params) {
        _loadProducts(data.params.category)
          .then(function (products) {

            // Dispatch a payload setting the category and
            // products values.
            _handleAction({
              category: category,
              products: products
            });
          });
      } 
    }

  }
};

module.exports = SearchActions;
