'use strict';

var React = require('react');
var ProductList = require('../components/ProductList.jsx');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../actions/ActionCreators');

var ProductHandler = React.createClass({
  propTypes: {
    products: React.PropTypes.array,
    params: React.PropTypes.object.isRequired
  },

  getDefaultProps: function () {
    return {
      products: [],
      params: []
    };
  },

  getInitialState: function () {
    return {
      products: this.props.products
    };
  },

  componentDidMount: function () {
    if (this.props.products.length === 0) {
      this.categoryDidChange(this.props.params.category);
    }
  },

  componentWillMount: function () {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    this.setState({
      products: ProductStore.getProducts()
    });
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.params.category !== this.props.params.category) {
      this.categoryDidChange(nextProps.params.category);
    }
  },

  categoryDidChange: function(category) {
    ActionCreators.requestProducts(category);
  },

  render: function() {
    return (
      <div>
        <span>Products go here</span>
        <ProductList products={ this.state.products } />
      </div>
    );
  }

});

module.exports = ProductHandler;
