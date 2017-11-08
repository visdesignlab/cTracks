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


  launchHgLib(ViewConfig, options) {
    return (element) => {
      if (element && ViewConfig) {
        hglib.createHgComponent(
          element,
          ViewConfig,
          options,
              function (api) {
                window.hgApi = api;
              }
        );
      }
    }
  }


  componentDidMount() {
    this.props.onHiglassUpdated();
  }

  componentDidUpdate() {
    console.log('HiGlass updated');
    this.props.onHiglassUpdated();
  }

  render () {
  	return (
        <div className = "higlass"
          ref={this.launchHgLib(
            this.props.ViewConfig,
            { bounded: false }
          )}>
        </div>
		)
  }
}

HiglassUI.propTypes = {
  ViewConfig: PropTypes.object,
  onHiglassUpdated: PropTypes.func,
}

export default HiglassUI;
