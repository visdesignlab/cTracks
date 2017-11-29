import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';
import './TracksMenu.css';


class TracksMenu extends Component {
  constructor (props) {
    super(props);

    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createCheckBox = this.createCheckBox.bind(this);
    this.createCheckBoxes = this.createCheckBoxes.bind(this);

    this.prevConfigFile = JSON.stringify(props.ConfigFile);
	}

  shouldComponentUpdate(newProps, newState) {
    if (this.prevConfigFile === newProps.ConfigFile) {
      return false;
    }

    console.log("shouldComponentUpdate: TracksMenu");
    console.log('YES', newProps.ConfigFile);
    this.prevConfigFile = newProps.ConfigFile;
    return true;
  }

	componentWillMount () {
		//this.selectedCheckBoxes = new Set();
	}


  toggleCheckBox (label) {
    // if (this.selectedCheckBoxes.has(label)) {
    //   this.selectedCheckBoxes.delete(label);
    // } else {
    //   this.selectedCheckBoxes.add(label);
    // }
    for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
      if (this.props.ConfigFile.tracks[i].label === label) {
        this.props.ConfigFile.tracks[i].display = !this.props.ConfigFile.tracks[i].display;
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
    return <CheckBox
      label={track.label}
      InitialState={track.display}
      handleCheckBoxChange={this.toggleCheckBox}
      key={track.label+track.display}
    />;
  }

  createCheckBoxes () {
  	return this.props.ConfigFile.tracks.map(this.createCheckBox);
  }

	render () {
		return (
      <div>
  			<label>Tracks Menu</label>
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