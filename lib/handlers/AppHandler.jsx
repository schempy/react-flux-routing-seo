'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var CategoryList = require('../components/CategoryList.jsx');

var AppHandler = React.createClass({

  propTypes: {
    params: React.PropTypes.object.isRequired,
    state: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      params: {},
      state: {}
    };
  },

  render: function() {
    return (
      <div>
        <CategoryList categories={ this.props.state.categories }/>
        <RouteHandler products={ this.props.state.products } params={ this.props.params }/>
      </div>
    );
  }

});

module.exports = AppHandler;
