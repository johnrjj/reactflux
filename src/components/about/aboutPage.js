var React = require('react');

var About = React.createClass({

  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      //LOGIN SWAG GOES HERE...
      // Then just call the callback
      callback();
    },
    willTransitionFrom: function(transition, component) {
    }
  },

  render: function() {
    return (
      <div >
        <h1> About</h1>
        <p>This is johns CRUD program that uses React, React Router, and Flux. This is the about page.</p>
      </div>
    );
  }
});


module.exports = About;
