'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {

  var wrapper = function (_React$Component) {
    _inherits(RTCheckboxTable, _React$Component);

    function RTCheckboxTable() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RTCheckboxTable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RTCheckboxTable.__proto__ || Object.getPrototypeOf(RTCheckboxTable)).call.apply(_ref, [this].concat(args))), _this), _this.rowSelector = function (row) {
        if (!row || !row.hasOwnProperty(_this.props.keyField)) return null;
        var checked = _this.props.isSelected(row[_this.props.keyField]);
        return _react2.default.createElement('input', {
          type: 'checkbox',
          checked: checked,
          onClick: function onClick(e) {
            var shiftKey = e.shiftKey;

            e.stopPropagation();
            _this.props.toggleSelection(row[_this.props.keyField], shiftKey, row);
          },
          onChange: function onChange() {},
          value: ''
        });
      }, _this.headSelector = function (row) {
        var checked = _this.props.selectAll;
        return _react2.default.createElement('input', {
          type: 'checkbox',
          checked: checked,
          onClick: function onClick(e) {
            e.stopPropagation();
            _this.props.toggleAll();
          },
          onChange: function onChange() {},
          value: ''
        });
      }, _this.getWrappedInstance = function () {
        return _this.wrappedInstance;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // we only need a Component so we can get the 'ref' - pure components can't get a 'ref'

    // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll


    _createClass(RTCheckboxTable, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            originalCols = _props.columns,
            isSelected = _props.isSelected,
            toggleSelection = _props.toggleSelection,
            toggleAll = _props.toggleAll,
            keyField = _props.keyField,
            selectAll = _props.selectAll,
            rest = _objectWithoutProperties(_props, ['columns', 'isSelected', 'toggleSelection', 'toggleAll', 'keyField', 'selectAll']);

        var rowSelector = this.rowSelector,
            headSelector = this.headSelector;

        var select = {
          id: '_selector',
          accessor: function accessor() {
            return 'x';
          }, // this value is not important
          Header: headSelector,
          Cell: function Cell(ci) {
            return rowSelector(ci.original);
          },
          width: 30,
          filterable: false,
          sortable: false,
          resizable: false,
          style: { textAlign: 'center' }
        };
        var columns = [select].concat(_toConsumableArray(originalCols));
        var extra = {
          columns: columns
        };
        return _react2.default.createElement(Component, _extends({}, rest, extra, { ref: function ref(r) {
            return _this2.wrappedInstance = r;
          } }));
      }
    }]);

    return RTCheckboxTable;
  }(_react2.default.Component);

  wrapper.displayName = 'RTCheckboxTable';
  wrapper.defaultProps = {
    keyField: '_id',
    isSelected: function isSelected(key) {
      console.log('No isSelected handler provided:', { key: key });
    },
    selectAll: false,
    toggleSelection: function toggleSelection(key, shift, row) {
      console.log('No toggleSelection handler provided:', { key: key, shift: shift, row: row });
    },
    toggleAll: function toggleAll() {
      console.log('No toggleAll handler provided.');
    }
  };

  return wrapper;
};