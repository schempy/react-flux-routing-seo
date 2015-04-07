'use strict';

var React = require('react');
var Router = require('react-router');
var Routes = require('./lib/Routes.jsx');
//var SearchActions = require('./lib/actions/SearchActions');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

Router.run(Routes, Router.HistoryLocation, function (Handler, state) {

  // Set initial state. Use params from the route state and the serialized javascript
  // stored in window.App. The JSON stored in window.App was created in
  // the server request.
  /*
  SearchActions.setState({
    params: state.params,
    state: window.App
  });
*/

  // Store the url parameters and the state from the server that we
  // are storing in window.App
  var props = {
		params: state.params,
		state: window.App
  };

  React.render(React.createFactory(Handler)(props), document.getElementById('app'));
});
