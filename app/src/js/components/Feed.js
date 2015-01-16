/** @jsx React.DOM */

var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList'),
    Firebase      = require('firebase'),
    _             = require('lodash');


var Feed = React.createClass({
  loadData: function() {
    var ref = new Firebase('https://vote123123.firebaseio.com/feed');
    ref.on('value', function(snap){
      var items = [];

      snap.forEach(function(itemSnap){
        var item = itemSnap.val();
        item.identifier = itemSnap.name();
        items.push(item);
      });

      this.setState({
        items: items
      });
    }.bind(this));
  },
  componentDidMount: function() {
    this.loadData();
  },
  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false
    }
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
    var ref = new Firebase('https://vote123123.firebaseio.com/feed');
    ref.push(newItem);
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
