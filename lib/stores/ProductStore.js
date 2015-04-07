'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionConstants = require('../constants/ActionConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ProductApi = require('../services/ProductApi');

var CHANGE_EVENT = 'change';
var products = [];


function requestProducts(category) {
  ProductApi.requestProducts(category);
}

function setProducts(newProducts) {
  products = newProducts;
}

var ProductStore = assign({}, EventEmitter.prototype, {

  /**
   * Emits change event.
   */
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Adds a change listener.
   *
   * @param {function} callback Callback function.
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Removes a change listener.
   *
   * @param {function} callback Callback function.
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Get products.
   */
  getProducts: function () {
    return products;
  }

});

ProductStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {

    case ActionConstants.SET_STATE:
      break;

    case ActionConstants.REQUEST_PRODUCTS:
      requestProducts(action.category);
      break;

    case ActionConstants.REQUEST_PRODUCTS_SUCCESS:
      setProducts(action.products);
      break;

    default:
      return true;
  }

  ProductStore.emitChange();

  return true;
});

module.exports = ProductStore;
