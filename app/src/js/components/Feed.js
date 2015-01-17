/** @jsx React.DOM */

var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList'),
    ErrorMessage  = require('./ErrorMessage'),
    Firebase      = require('firebase'),
    _             = require('lodash');


var Feed = React.createClass({
  loadData: function() {
    var ref = new Firebase('https://vote123123.firebaseio.com/feed');
    ref.on('value', function(snap){
      var items  = [],
          sortedItems = [];

      snap.forEach(function(itemSnap){
        var item = itemSnap.val();
        item.identifier = itemSnap.name();
        items.push(item);
      });

      sortedItems = _.sortBy(items, function(item){
        return -item.voteCount;
      });

      this.setState({
        items: sortedItems,
        hideErrorMessage: true
      });
    }.bind(this));
  },
  componentDidMount: function() {
    this.loadData();
  },
  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false,
      hideErrorMessage: true
    }
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed,
      hideErrorMessage: true
    });
  },
  isValidItem: function(item) {
    return !!item.title && item.description;
  },
  onNewItem: function(newItem) {
    var ref = new Firebase('https://vote123123.firebaseio.com/feed');

    if(this.isValidItem(newItem)) {
      ref.push(newItem);
    } else {
      this.setState({
        hideErrorMessage: false
      });
    }
  },
  onVote: function(item) {
    var ref = new Firebase('https://vote123123.firebaseio.com/feed').child(item.identifier);

    ref.update(item);
  },
  render: function() {
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-xs-8 col-lg-offset-4 col-md-offset-4 col-xs-offset-2'>
              <ShowAddButton displayed={this.state.formDisplayed}
                             onToggleForm={this.onToggleForm} />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-xs-8 col-lg-offset-4 col-md-offset-4 col-xs-offset-2'>
              <ErrorMessage hideErrorMessage={this.state.hideErrorMessage} />
              <FeedForm displayed={this.state.formDisplayed}
                        onNewItem={this.onNewItem}/>
            </div>
          </div>
        </div>
        <br />
        <FeedList items={this.state.items} onVote={this.onVote} />
      </div>
    );
  }
});

module.exports = Feed;
