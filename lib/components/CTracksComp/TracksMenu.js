'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('./CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

require('./TracksMenu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TracksMenu = function (_Component) {
  _inherits(TracksMenu, _Component);

  function TracksMenu(props) {
    _classCallCheck(this, TracksMenu);

    var _this = _possibleConstructorReturn(this, (TracksMenu.__proto__ || Object.getPrototypeOf(TracksMenu)).call(this, props));

    _this.toggleCheckBoxTop = _this.toggleCheckBoxTop.bind(_this);
    _this.toggleCheckBoxBottom = _this.toggleCheckBoxBottom.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    _this.createCheckBox = _this.createCheckBox.bind(_this);
    _this.createCheckBoxes = _this.createCheckBoxes.bind(_this);

    _this.prevConfigFile = JSON.stringify(props.ConfigFile);
    return _this;
  }

  _createClass(TracksMenu, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      if (this.prevConfigFile === newProps.ConfigFile) {
        return false;
      }

      this.prevConfigFile = newProps.ConfigFile;
      return true;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'toggleCheckBoxTop',
    value: function toggleCheckBoxTop(label) {

      for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
        if (this.props.ConfigFile.tracks[i].label === label) {
          this.props.ConfigFile.tracks[i].display.top = !this.props.ConfigFile.tracks[i].display.top;
          break;
        }
      }
    }
  }, {
    key: 'toggleCheckBoxBottom',
    value: function toggleCheckBoxBottom(label) {

      for (var i = 0; i < this.props.ConfigFile.tracks.length; i++) {
        if (this.props.ConfigFile.tracks[i].label === label) {
          this.props.ConfigFile.tracks[i].display.bottom = !this.props.ConfigFile.tracks[i].display.bottom;
          break;
        }
      }
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(formSubmitEvent) {
      formSubmitEvent.preventDefault();
      this.props.UpdateDisplay();
      // console.log(this.selectedCheckBoxes);
      // for (const checkBox of this.selectedCheckBoxes) {
      //   console.log(checkBox, 'is selected.');
      // }
    }
  }, {
    key: 'createCheckBox',
    value: function createCheckBox(track, index) {
      var KeyTop = track.label + '_topView';
      var KeyBottom = track.label + '_bottomView';
      return _react2.default.createElement(
        'div',
        { key: index, className: 'CheckBoxItem' },
        _react2.default.createElement(_CheckBox2.default, { className: 'CheckBox',
          label: track.label,
          InitialState: track.display.top,
          handleCheckBoxChange: this.toggleCheckBoxTop,
          key: KeyTop
        }),
        _react2.default.createElement(_CheckBox2.default, { className: 'CheckBox',
          label: track.label,
          InitialState: track.display.bottom,
          handleCheckBoxChange: this.toggleCheckBoxBottom,
          key: KeyBottom
        }),
        _react2.default.createElement(
          'label',
          { className: 'CheckBoxLabel' },
          track.label
        )
      );
    }
  }, {
    key: 'createCheckBoxes',
    value: function createCheckBoxes() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'CheckBoxItem' },
          _react2.default.createElement(
            'label',
            { className: 'CheckBoxTitle' },
            'Top'
          ),
          _react2.default.createElement(
            'label',
            { className: 'CheckBoxTitle' },
            'Bottom'
          ),
          _react2.default.createElement(
            'label',
            { className: 'CheckBoxTitle' },
            'Track name'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.ConfigFile.tracks.map(this.createCheckBox)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          'Higlass - Tracks menu'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleFormSubmit },
          this.createCheckBoxes(),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default', type: 'submit' },
            'Update Display'
          )
        )
      );
    }
  }]);

  return TracksMenu;
}(_react.Component);

TracksMenu.propTypes = {
  ConfigFile: _propTypes2.default.object.isRequired,
  UpdateDisplay: _propTypes2.default.func.isRequired
};

exports.default = TracksMenu;