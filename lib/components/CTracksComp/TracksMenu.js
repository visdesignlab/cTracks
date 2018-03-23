import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';
import './TracksMenu.css';

class TracksMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCheckBoxTop = this.toggleCheckBoxTop.bind(this);
    this.toggleCheckBoxBottom = this.toggleCheckBoxBottom.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createCheckBox = this.createCheckBox.bind(this);
    this.createCheckBoxes = this.createCheckBoxes.bind(this);

    this.prevConfigFile = JSON.stringify(props.ConfigFile);
  }

  shouldComponentUpdate(newProps, newState) {
    if (this.prevConfigFile === newProps.ConfigFile) {
      return false;
    }

    this.prevConfigFile = newProps.ConfigFile;
    return true;
  }

  componentWillMount() {}

  toggleCheckBoxTop(label) {

    for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
      if (this.props.ConfigFile.tracks[i].label === label) {
        this.props.ConfigFile.tracks[i].display.top = !this.props.ConfigFile.tracks[i].display.top;
        break;
      }
    }
  }

  toggleCheckBoxBottom(label) {

    for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
      if (this.props.ConfigFile.tracks[i].label === label) {
        this.props.ConfigFile.tracks[i].display.bottom = !this.props.ConfigFile.tracks[i].display.bottom;
        break;
      }
    }
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    this.props.UpdateDisplay();
    // console.log(this.selectedCheckBoxes);
    // for (const checkBox of this.selectedCheckBoxes) {
    //   console.log(checkBox, 'is selected.');
    // }
  }

  createCheckBox(track, index) {
    var KeyTop = track.label + '_topView';
    var KeyBottom = track.label + '_bottomView';
    return React.createElement(
      'div',
      { key: index, className: 'CheckBoxItem' },
      React.createElement(CheckBox, { className: 'CheckBox',
        label: track.label,
        InitialState: track.display.top,
        handleCheckBoxChange: this.toggleCheckBoxTop,
        key: KeyTop
      }),
      React.createElement(CheckBox, { className: 'CheckBox',
        label: track.label,
        InitialState: track.display.bottom,
        handleCheckBoxChange: this.toggleCheckBoxBottom,
        key: KeyBottom
      }),
      React.createElement(
        'label',
        { className: 'CheckBoxLabel' },
        track.label
      )
    );
  }

  createCheckBoxes() {

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'CheckBoxItem' },
        React.createElement(
          'label',
          { className: 'CheckBoxTitle' },
          'Top'
        ),
        React.createElement(
          'label',
          { className: 'CheckBoxTitle' },
          'Bottom'
        ),
        React.createElement(
          'label',
          { className: 'CheckBoxTitle' },
          'Track name'
        )
      ),
      React.createElement(
        'div',
        null,
        this.props.ConfigFile.tracks.map(this.createCheckBox)
      )
    );
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'label',
        null,
        'Higlass - Tracks menu'
      ),
      React.createElement(
        'form',
        { onSubmit: this.handleFormSubmit },
        this.createCheckBoxes(),
        React.createElement(
          'button',
          { className: 'btn btn-default', type: 'submit' },
          'Update Display'
        )
      )
    );
  }
}

TracksMenu.propTypes = {
  ConfigFile: PropTypes.object.isRequired,
  UpdateDisplay: PropTypes.func.isRequired
};

export default TracksMenu;