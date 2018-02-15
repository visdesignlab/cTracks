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
    if (this.prevViewConfig === newProps.ViewConfig) {
      return false;
    }

    //console.log('yes', newProps.ViewConfig);
    //console.log("shouldComponentUpdate: HiglassUI");
    this.prevViewConfig = newProps.ViewConfig;
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
    this.props.onHiglassUpdated();
  }

  render () {
  	return (
        <div className = "higlass"
          ref={this.launchHgLib(
            JSON.parse(this.props.ViewConfig),
            { bounded: false }
          )}>
        </div>
		)
  }
}

HiglassUI.propTypes = {
  ViewConfig: PropTypes.string,
  onHiglassUpdated: PropTypes.func,
}

export default HiglassUI;
