'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change',
    _category = '',
    _products = [];

/**
 * Set the values of the elements we are
 * storing as state.
 */
function setState (stateObj) {
  _category = stateObj.category;
  _products = stateObj.products;
}

var SearchStore = assign({}, EventEmitter.prototype, {

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
   * Get the category.
   */
  getCategory: function () {
    return _category;
  },

  /**
   * Get the products.
   */
  getProducts: function () {
    return _products;
  }

});

SearchStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case ActionTypes.SET_STATE:
      setState(action.data);
      break;

    default:
      return true;
  }

  SearchStore.emitChange();

  return true;
});

module.exports = SearchStore;
