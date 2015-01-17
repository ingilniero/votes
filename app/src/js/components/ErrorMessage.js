/** @jsx React.DOM */

var React = require('react');

var ErrorMessage = React.createClass({
  render: function() {
    var hideClass = this.props.hideErrorMessage ? 'hide' : '';
    var classes = 'bg-danger ' + hideClass;

    return(
      <div className={classes}>
        <p>Something went wrong</p>
      </div>
    );
  }
});


module.exports = ErrorMessage;
