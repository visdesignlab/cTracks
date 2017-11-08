import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CheckBox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isChecked: this.props.InitialState
    }
  }

  toggleCheckBoxChange = () => {
    const { handleCheckBoxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckBoxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkBox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckBoxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
};

export default CheckBox;