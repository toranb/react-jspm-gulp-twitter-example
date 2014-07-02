/** @jsx React.DOM */

import React from 'react';

var Analytics = React.createClass({
    render: function() {
        return (
          <div>
            <h1>Analytics!</h1>
            {this.props.activeRoute}
          </div>
        );
    }
});

export default Analytics;
