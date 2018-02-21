'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./CheckBox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

    _this.toggleCheckBoxChange = function () {
      var _this$props = _this.props,
          handleCheckBoxChange = _this$props.handleCheckBoxChange,
          label = _this$props.label;


      _this.setState(function (_ref) {
        var isChecked = _ref.isChecked;
        return {
          isChecked: !isChecked
        };
      });

      handleCheckBoxChange(label);
    };

    _this.state = {
      isChecked: _this.props.InitialState
    };

    _this.prevlabel = _this.props.label;
    _this.prevInitialState = _this.props.InitialState;
    return _this;
  }

  _createClass(CheckBox, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;
      var isChecked = this.state.isChecked;
      // <label className="CheckBoxLabel">
      //   {label}
      // </label>

      return _react2.default.createElement(
        'div',
        { className: 'CheckBox' },
        _react2.default.createElement('input', {
          type: 'checkBox',
          value: label,
          checked: isChecked,
          onChange: this.toggleCheckBoxChange
        })
      );
    }
  }]);

  return CheckBox;
}(_react.Component);

CheckBox.propTypes = {
  label: _propTypes2.default.string.isRequired,
  InitialState: _propTypes2.default.bool.isRequired,
  handleCheckBoxChange: _propTypes2.default.func.isRequired
};

exports.default = CheckBox;