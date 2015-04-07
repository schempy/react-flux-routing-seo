'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionConstants = require('../constants/ActionConstants');

var ActionCreators = {
  setState: function(state) {
    Dispatcher.handleViewAction({
      actionType: ActionConstants.SET_STATE,
      state: state
    });
  },

  requestProducts: function(category) {
		Dispatcher.handleViewAction({
			actionType: ActionConstants.REQUEST_PRODUCTS,
			category: category
		});
  }
};

module.exports = ActionCreators;
