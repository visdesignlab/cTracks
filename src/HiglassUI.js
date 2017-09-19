import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as hglib from 'higlass';
import './HiglassUI.css'

class HiglassUI extends Component {
  render () {
  	return (
  		  <div>
  		  	{hglib.createHgComponent(
		        document.getElementById('higlass'),
		        this.props.ViewConfig,
		        { bounded: true },
		        function (api) {
		          window.hgApi = api;
		          console.log("hgAPI:", window.hgApi);
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
