'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionConstants = require('../constants/ActionConstants');

var ServerActionCreators = {

  handleProductsSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionConstants.REQUEST_PRODUCTS_SUCCESS,
      products: response
    });
  },

  handleProductsError: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionConstants.REQUEST_PRODUCTS_ERROR,
      error: response
    });
  }

};

module.exports = ServerActionCreators;
