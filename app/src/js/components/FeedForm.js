/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({
  handleForm: function(e) {
    e.preventDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset();
    this.props.onNewItem(newItem);


  },
  render: function() {

    var displayValue = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: displayValue
    };

    return(
      <form ref='feedForm' style={styles} onSubmit={this.handleForm}>
        <div className='form-group'>
          <input ref='title' type='text' className='form-control' placeholder='Title'/>
        </div>

        <div className='form-group'>
          <textarea ref='desc' className='form-control' placeholder='Description' rows="3"></textarea>
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary btn-block'>Add</button>
        </div>
      </form>
    );
  }
});

module.exports = FeedForm;
