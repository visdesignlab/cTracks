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
    console.log('newProps.ViewConfig:', newProps.ViewConfig);

    if (this.prevViewConfig === JSON.stringify(newProps.ViewConfig))
      return false;

    console.log('here', newProps.ViewConfig);
    this.prevViewConfig = JSON.stringify(newProps.ViewConfig);
    return true;
  }

  launchHg() {
    hglib.createHgComponent(
      document.getElementById('higlass'),
      this.props.ViewConfig,
      { bounded: false },
      function (api) {
        window.hgApi = api;
      }
    )
  }

  componentDidMount() {
    this.launchHg();
    this.props.onHiglassUpdated();
  }

  componentDidUpdate() {
    this.launchHg();
    console.log('HiGlass updated');
    this.props.onHiglassUpdated();
  }

  render () {
  	return (
  		  <div className = "HiglassUI">
  		  </div>
  		)
  }
}

HiglassUI.propTypes = {
  ViewConfig: PropTypes.object,
  onHiglassUpdated: PropTypes.func,
}

export default HiglassUI;
