'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppHandler = React.createClass({

  getInitialState: function() {
    return {
      mode: 'Server Rendering',
      counter: 0
    };
  },

  propTypes: {
    categories: React.PropTypes.array,
    products: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      categories: [],
      products: []
    };
  },

  componentDidMount: function() {
    this.setState({
      mode: 'Client Rendering'
    });

    window.setInterval(this.incrementCounter, 1000);
  },

  incrementCounter: function() {
    this.setState({counter: this.state.counter+1});
  },

  /* jshint ignore:start */
  render: function() {
    return (
      <div>
        <header>
          Current mode: {this.state.mode} <br />
          {(this.state.counter > 0) ? this.state.counter + ' seconds' : ''}
        </header>

        <RouteHandler categories={ this.props.categories } products= { this.props.products } />
      </div>
    );
  }
  /* jshint ignore:end */

});

module.exports = AppHandler;
