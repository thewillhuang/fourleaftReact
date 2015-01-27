'use strict';
require('bootstrap');
var React = require('react');
var Grid  = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var data = require('../data/data.json');

var RenderConnectionList = React.createClass({

  render: function() {
    var renderRow = this.props.data.map(function(row, key) {
      return (
        <RenderArtistRow row={row} key={key} />
        );
    });
    return (
      <Grid>
      {renderRow}
      </Grid>
    );
  }

});

var RenderArtistRow = React.createClass({

  render: function() {
    return (
      <Row>
      {this.props.row}
      {console.log(this.props.row)}
      </Row>
    );
  }

});

React.render(<RenderConnectionList data={data}/>, document.getElementById('reactRoot'));

