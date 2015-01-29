'use strict';
var React = require('react');
var data = require('../data/data.json');

var RenderConnectionList = React.createClass({

  render: function() {
    var renderRow = this.props.data.map(function(row, key) {
      return (
        <RenderArtistRow row={row} key={key} />
        );
    });
    return (
      <div>
      {renderRow}
      </div>
    );
  }

});

var RenderArtistRow = React.createClass({

  render: function() {
    return (
      <div>
      {this.props.row}
      {console.log(this.props.row)}
      </div>
    );
  }

});

React.render(<RenderConnectionList data={data}/>, document.getElementById('reactRoot'));

