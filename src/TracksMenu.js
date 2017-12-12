import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';
import './TracksMenu.css';


class TracksMenu extends Component {
  constructor (props) {
    super(props);

    this.toggleCheckBoxTop = this.toggleCheckBoxTop.bind(this);
    this.toggleCheckBoxBottom = this.toggleCheckBoxBottom.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createCheckBox = this.createCheckBox.bind(this);
    //this.createCheckBoxTop = this.createCheckBoxTop.bind(this);
    //this.createCheckBoxBottom = this.createCheckBoxBottom.bind(this);
    this.createCheckBoxes = this.createCheckBoxes.bind(this);

    this.prevConfigFile = JSON.stringify(props.ConfigFile);
	}

  shouldComponentUpdate(newProps, newState) {
    if (this.prevConfigFile === newProps.ConfigFile) {
      return false;
    }

    //console.log("shouldComponentUpdate: TracksMenu");
    //console.log('YES', newProps.ConfigFile);
    this.prevConfigFile = newProps.ConfigFile;
    return true;
  }

	componentWillMount () {
	}


  toggleCheckBoxTop (label) {

    for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
      if (this.props.ConfigFile.tracks[i].label === label) {
        this.props.ConfigFile.tracks[i].display.top = !this.props.ConfigFile.tracks[i].display.top;
        break;
      }
    }
  }

  toggleCheckBoxBottom (label) {

    for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
      if (this.props.ConfigFile.tracks[i].label === label) {
        this.props.ConfigFile.tracks[i].display.bottom = !this.props.ConfigFile.tracks[i].display.bottom;
        break;
      }
    }
  }

  handleFormSubmit (formSubmitEvent) {
    formSubmitEvent.preventDefault();
    //console.log('CONFIG',this.props.ConfigFile);
    this.props.UpdateDisplay();
    // console.log(this.selectedCheckBoxes);
    // for (const checkBox of this.selectedCheckBoxes) {
    //   console.log(checkBox, 'is selected.');
    // }
  }

  createCheckBox (track, index) {
    var KeyTop = track.label + '_topView';
    var KeyBottom = track.label + '_bottomView';
    return <div key={index} className = "CheckBoxItem">
      <CheckBox className="CheckBox"
        label={track.label}
        InitialState={track.display.top}
        handleCheckBoxChange={this.toggleCheckBoxTop}
        key={KeyTop}
      />
      <CheckBox className="CheckBox"
        label={track.label}
        InitialState={track.display.bottom}
        handleCheckBoxChange={this.toggleCheckBoxBottom}
        key={KeyBottom}
      />
      <label className="CheckBoxLabel">
        {track.label}
      </label>
    </div>;
  }

  createCheckBoxes () {

  	return <div>
      <div className = "CheckBoxItem">
        <label className="CheckBoxTitle">Top</label>
        <label className="CheckBoxTitle">Bottom</label>
        <label className="CheckBoxTitle">TrackName</label>
      </div>
      <div>
        {this.props.ConfigFile.tracks.map(this.createCheckBox)}
      </div>
    </div>;
}

	render () {
		return (
      <div>
  			<label>Higlass - Tracks menu</label>
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckBoxes()}
          <button className="btn btn-default" type="submit">Update Display</button>
        </form>
      </div>
		)
	}
}


TracksMenu.propTypes = {
  ConfigFile: PropTypes.object.isRequired,
  UpdateDisplay: PropTypes.func.isRequired
}


export default TracksMenu;