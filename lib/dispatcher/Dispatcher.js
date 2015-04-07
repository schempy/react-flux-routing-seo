'use strict';

var Flux = require('flux');
var assign = require('object-assign');

var Dispatcher = assign(new Flux.Dispatcher(), {

  handleViewAction: function (action) {
    var payload = {
      action: action
    };
    this.dispatch(payload);
  },

  handleServerAction: function (action) {
    var payload = {
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = Dispatcher;
