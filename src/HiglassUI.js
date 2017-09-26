import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as hglib from 'higlass';
import './HiglassUI.css'

class HiglassUI extends Component {
  render () {
  	return (
  		  <div className = "HiglassUI">
  		  	{hglib.createHgComponent(
		        document.getElementById('higlass'),
		        this.props.ViewConfig,
		        { bounded: true },
		        function (api) {
		          window.hgApi = api;
		        }
      		)}
  		  </div>
  		)
  }

}

HiglassUI.propTypes = {
  ViewConfig: PropTypes.object.isRequired
}

export default HiglassUI;
