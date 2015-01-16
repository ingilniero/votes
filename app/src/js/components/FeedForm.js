/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({
  render: function() {

    var displayValue = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: displayValue
    };

    return(
      <form style={styles} className='container'>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Title'/>
          <input type='text' className='form-control' placeholder='Description'/>
          <button type='submit' className='btn btn-primary btn-block'>Add</button>
        </div>
      </form>
    );
  }
});

module.exports = FeedForm;
