'use strict';

var React = require('react');

var ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      products: []
    };
  },

  render: function() {
    return (
      <div>
        <ul>
          {this.props.products.map(function (product) {
            return (
              <li key={ product.id }>
                <span>{ product.name }</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

});

module.exports = ProductList;
