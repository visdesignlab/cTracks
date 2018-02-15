'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _higlass = require('higlass');

var hglib = _interopRequireWildcard(_higlass);

require('./HiglassUI.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HiglassUI = function (_Component) {
  _inherits(HiglassUI, _Component);

  function HiglassUI(props) {
    _classCallCheck(this, HiglassUI);

    var _this = _possibleConstructorReturn(this, (HiglassUI.__proto__ || Object.getPrototypeOf(HiglassUI)).call(this, props));

    _this.prevViewConfig = JSON.stringify(props.ViewConfig);
    return _this;
  }

  _createClass(HiglassUI, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      if (this.prevViewConfig === newProps.ViewConfig) {
        return false;
      }

      //console.log('yes', newProps.ViewConfig);
      //console.log("shouldComponentUpdate: HiglassUI");
      this.prevViewConfig = newProps.ViewConfig;
      return true;
    }
  }, {
    key: 'launchHgLib',
    value: function launchHgLib(ViewConfig, options) {
      return function (element) {
        if (element && ViewConfig) {
          hglib.createHgComponent(element, ViewConfig, options, function (api) {
            window.hgApi = api;
          });
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onHiglassUpdated();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.onHiglassUpdated();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'higlass',
        ref: this.launchHgLib(JSON.parse(this.props.ViewConfig), { bounded: false }) });
    }
  }]);

  return HiglassUI;
}(_react.Component);

HiglassUI.propTypes = {
  ViewConfig: _propTypes2.default.string,
  onHiglassUpdated: _propTypes2.default.func
};

exports.default = HiglassUI;