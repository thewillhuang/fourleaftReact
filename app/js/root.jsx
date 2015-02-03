'use strict';
var $ = require('jquery');
// require('bootstrap');
// var React = require('react');
// var data = require('../data/data.json');

// var RenderConnectionList = React.createClass({

//   render: function() {
//     var renderRow = this.props.data.map(function(row, key) {
//       return (
//         <RenderArtistRow row={row} key={key} />
//         );
//     });
//     return (
//       <div>
//       {renderRow}
//       </div>
//     );
//   }

// });

// var RenderArtistRow = React.createClass({

//   render: function() {
//     return (
//       <div>
//       {this.props.row}
//       {console.log(this.props.row)}
//       </div>
//     );
//   }

// });

// React.render(<RenderConnectionList data={data}/>, document.getElementById('reactRoot'));
$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

