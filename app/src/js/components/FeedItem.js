/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({
  render: function() {
    return(
      <li className='list-group-item clearfix'>
        <span className='badge'>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.description}</span>
        <span className='pull-right'>
          <button id='up' className='btn btn-sm btn-success'>&uarr;</button>
          <button id='down' className='btn btn-sm btn-danger'>&darr;</button>
        </span>
      </li>
    );
  }
});

module.exports = FeedItem;
