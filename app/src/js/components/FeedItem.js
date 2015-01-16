/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({
  vote: function(newCount) {
    this.props.onVote({
      identifier: this.props.identifier,
      title: this.props.title,
      description: this.props.desc,
      voteCount: newCount
    });
  },
  voteDown: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },
  voteUp: function(){
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },
  render: function() {
    return(
      <li key={this.props.identifier} className='list-group-item clearfix'>
        <span className='badge'>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className='pull-right'>
          <button id='up' className='btn btn-sm btn-success' onClick={this.voteUp}>&uarr;</button>
          <button id='down' className='btn btn-sm btn-danger'onClick={this.voteDown}>&darr;</button>
        </span>
      </li>
    );
  }
});

module.exports = FeedItem;
