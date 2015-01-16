/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash');


var Feed = React.createClass({
  getInitialState: function() {
    var FEED_ITEMS = [
      { identifier: '1', title: 'Angular', description: 'MVVC Framework', voteCount: 14 },
      { identifier: '2', title: 'Ember', description: 'MVVC Framework', voteCount: 63 },
      { identifier: '3', title: 'ReactJS', description: 'View Framework', voteCount: 54 }
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
    newItem.identifier = this.state.items.length;
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false
    });
  },
  onVote: function(item) {
    var items = _.uniq(this.state.items);

    var oldObj = _.find(items, function(feedItem){
      return feedItem.identifier === item.identifier;
    });

    var newItems = _.pull(items, oldObj);

    newItems.push(item);

    this.setState({
      items: newItems
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
        <FeedList items={this.state.items} onVote={this.onVote} />
      </div>
    );
  }
});

module.exports = Feed;
