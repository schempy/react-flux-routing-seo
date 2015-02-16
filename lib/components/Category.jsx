'use strict';

var React = require('react');
var Navigation = require('react-router').Navigation;

var Category = React.createClass({
  mixins: [Navigation],

  handleChange: function (e) {
    this.transitionTo('/products/' + e.target.value);
  },

  propTypes: {
    categories: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      cagtegories: null
    };
  },

  /* jshint ignore:start */
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
  /* jshint ignore:end */

});

module.exports = Category;
