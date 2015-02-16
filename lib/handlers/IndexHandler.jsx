'use strict';

var React = require('react');
var Category = require('../components/Category.jsx');
var RouteHandler = require('react-router').RouteHandler;

var IndexHandler = React.createClass({
  propTypes: {
    categories: React.PropTypes.array,
    products: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      cagtegories: [],
      products: []
    };
  },

  /* jshint ignore:start */
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <Category categories={ this.props.categories }/>
        <RouteHandler products={ this.props.products } />
      </div>
    );
  }
  /* jshint ignore:end */

});

module.exports = IndexHandler;
