'use strict';

var React = require('react');

var CategoryList = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  handleChange: function (e) {
    this.context.router.transitionTo('products', { category: e.target.value });
  },

  propTypes: {
    categories: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      cagtegories: []
    };
  },

  render: function () {
    var categories;

    if (this.props.categories) {
      categories = this.props.categories.map(function (category) {
        return <option key={ category.id }
            value={ category.name.toLowerCase() }>
            { category.name }</option>;
      });
    }

    return (
      <div>
        <select name="category" onChange={ this.handleChange }>
          <option value="">Select a Category</option>
          { categories }
        </select>
      </div>
    );

  }

});

module.exports = CategoryList;
