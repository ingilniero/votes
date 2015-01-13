/** @jsx React.DOM */

var React = require('react'),
    Feed = require('./components/Feed');

var component = React.renderComponent(
  <Feed />,
  document.getElementById('app')
);
