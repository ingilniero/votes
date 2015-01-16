/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = React.createClass({
  render: function() {

    var classString = 'btn btn-block',
        buttonText;

    if(this.props.displayed) {
      classString = classString + ' btn-danger';
      buttonText = 'Cancel';
    } else {
      classString = classString + ' btn-success';
      buttonText = 'Create';
    }

    return(
      <button
          className={classString}
          onClick={this.props.onToggleForm}>
          {buttonText}
      </button>
    );
  }
});

module.exports = ShowAddButton;
