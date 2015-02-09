'use strict';
// require('bootstrap');
var React = require('react');
var a11y = require('react-a11y');
var data = require('../data/data.json');
var ENV = 'development';
if (ENV === 'development') a11y();

var RenderProfile = React.createClass({

  render: function() {
    console.log(this.props.data);
    var daw;
    if (this.props.data.daw === null) {
      daw = 'no daw';
    } else {
      daw = this.props.data.daw.map(function(index, key) {
        return(
          <div key={key}>
            {index}
          </div>
          );
      });
    }

    var genre;
    if (this.props.data.genre === null) {
      genre = 'no genre';
    } else {
      genre = this.props.data.genre.map(function(index, key) {
        return(
          <div key={key}>
            {index}
          </div>
          );
      });
    }

    return (
      <div>

        <div className="profile-photo">
          <img alt="profile-photo" src={this.props.data.img} />
        </div>

        <div className="profile-name">
          {this.props.data.display_name}
        </div>

        <div className="profile-info-box">
          <div className="profile-role">
            {this.props.data.role}
          </div>

          <div className="profile-location">
            {this.props.data.state_code}
          </div>

          <div className="profile-genre">
          {genre}
          </div>

          <div className="profile-daw">
          {daw}
          </div>
        </div>

      </div>
      );
  }

});

React.render(<RenderProfile data={data[12]}/>, document.getElementById('reactRoot'));


module.exports = RenderProfile;
