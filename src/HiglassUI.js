import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as hglib from 'higlass';
import './HiglassUI.css'

class HiglassUI extends Component {
  constructor(props) {
    super(props);

    this.prevViewConfig = JSON.stringify(props.ViewConfig)
  }

  shouldComponentUpdate(newProps, newState) {
    if (this.prevViewConfig === JSON.stringify(newProps.ViewConfig))
      return false;

    console.log('here', newProps.ViewConfig);
    this.prevViewConfig = JSON.stringify(newProps.ViewConfig);
    return true;
  }

  componentDidUpdate() {
    console.log('HiGlass updated');
    this.props.onHiglassUpdated();
  }

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
  ViewConfig: PropTypes.object
}

export default HiglassUI;
