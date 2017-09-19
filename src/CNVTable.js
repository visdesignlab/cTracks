import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CNVTable.css';

class CNVTable extends Component {

	render () {
		return (
			<div>
				<p>Chromosome range:</p>
				<ul>
					<li>Begin: {this.props.location[0]} - {this.props.location[1]}</li>
					<li>End: {this.props.location[2]} - {this.props.location[3]}</li>
				</ul>
			</div>
		)
	}
}

export default CNVTable;
