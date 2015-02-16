'use strict';

var React = require('react');
var ProductList = require('../components/ProductList.jsx');
var SearchStore = require('../stores/SearchStore');

var ProductHandler = React.createClass({
  propTypes: {
    products: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      products: this.props.products
    };
  },

  componentWillMount: function () {
    SearchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      products: SearchStore.getProducts()
    });
  },

  /* jshint ignore:start */
  render: function() {
    return (
      <div>
        <span>Products go here</span>
        <ProductList products={ this.state.products } />
      </div>
    );
  }
  /* jshint ignore:end */

});

module.exports = ProductHandler;
