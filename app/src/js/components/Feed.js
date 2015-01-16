/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList');

var Feed = React.createClass({
  getInitialState: function() {
    var FEED_ITEMS = [
      { key: '1', title: 'Angular', description: 'MVVC Framework', voteCount: 14 },
      { key: '2', title: 'Ember', description: 'MVVC Framework', voteCount: 63 },
      { key: '3', title: 'ReactJS', description: 'View Framework', voteCount: 54 }
    ];

    return {
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false
    });
  },
  render: function() {
    return(
      <div>
        <div className='container'>
          <ShowAddButton displayed={this.state.formDisplayed}
                         onToggleForm={this.onToggleForm} />
        </div>
        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
        <br />
        <br />
        <FeedList items={this.state.items} />
      </div>
    );
  }
});

module.exports = Feed;
