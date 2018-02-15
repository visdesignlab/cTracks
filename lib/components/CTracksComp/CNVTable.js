'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// New table


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

var _checkboxHOC = require('./checkboxHOC');

var _checkboxHOC2 = _interopRequireDefault(_checkboxHOC);

require('react-table/react-table.css');

require('./CNVTable.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// include Higher Order Component (HOC) to React Table
var CheckboxTable = (0, _checkboxHOC2.default)(_reactTable2.default);

// Filter CVN data using location information (from ViewConfig) 
function FilterInfo(location, data) {
  var Keys = Object.keys(data[0]);

  var output = [];
  var searchField1 = Keys[1]; // "chrom"
  var searchField2 = Keys[2]; // "start"
  var searchField3 = Keys[3]; // "stop"
  var searchVal1 = location[0].replace('chr', '');
  if (!isNaN(searchVal1)) {
    searchVal1 = parseInt(searchVal1, 10);
  }
  var searchVal2 = location[1];
  var searchVal3 = location[2].replace('chr', '');
  if (!isNaN(searchVal3)) {
    searchVal3 = parseInt(searchVal3, 10);
  }
  var searchVal4 = location[3];

  // Multiple rounds for search: 
  var Index_Lower = 0;
  var Index_Upper = data.length;
  // Step 1: find lower index 
  for (var i = 0; i < data.length; i++) {
    if (data[i][searchField1] < searchVal1) {
      continue;
    } else if (data[i][searchField1] > searchVal1 | data[i][searchField1] === searchVal1 & data[i][searchField2] >= searchVal2) {
      Index_Lower = i;
      break;
    }
  }

  // Step 2: find upper index 
  for (var _i = Index_Lower; _i < data.length; _i++) {
    if (data[_i][searchField1] < searchVal3) {
      continue;
    }if (data[_i][searchField1] > searchVal3 | data[_i][searchField1] === searchVal3 & data[_i][searchField3] > searchVal4) {
      Index_Upper = _i;
      break;
    }
  }

  // Step3: return filtered table
  for (var _i2 = Index_Lower; _i2 < Index_Upper; _i2++) {
    output.push(data[_i2]);
  }
  return output;
}

//Get list of Id from filtered data
function GetFilteredListId(JSONdata) {
  var MyArray = [];
  for (var i = 0; i < JSONdata.length; i++) {
    MyArray.push(JSONdata[i]["_id"]);
  }
  return MyArray;
}

// generate data with ID information
function GenerateTableData(inputData) {
  var Keys = Object.keys(inputData[0]);
  var data = inputData.map(function (item) {
    var _id = 'chr' + item[Keys[0]] + '-' + item[Keys[1]];
    return _extends({
      _id: _id
    }, item);
  });
  //console.log("TableData - 1st row",data[0]);
  return data;
}

// generate automated column information for Table
function GenerateTableColumns(data) {
  var columns = [];
  var sample = data[0];
  Object.keys(sample).forEach(function (key) {
    if (key !== '_id') {
      columns.push({
        accessor: key,
        Header: key
      });
    }
  });
  return columns;
}

var CNVTable = function (_Component) {
  _inherits(CNVTable, _Component);

  function CNVTable(props) {
    _classCallCheck(this, CNVTable);

    var _this = _possibleConstructorReturn(this, (CNVTable.__proto__ || Object.getPrototypeOf(CNVTable)).call(this, props));

    _this.toggleSelection = function (key, shift, row) {
      /*
        Implementation of how to manage the selection state is up to the developer.
        This implementation uses an array stored in the component state.
        Other implementations could use object keys, a Javascript Set, or Redux... etc.
      */
      // start off with the existing state
      var selection = [].concat(_toConsumableArray(_this.state.selection));
      var keyIndex = selection.indexOf(key);
      // check to see if the key exists
      if (keyIndex >= 0) {
        // it does exist so we will remove it using destructing
        selection = [].concat(_toConsumableArray(selection.slice(0, keyIndex)), _toConsumableArray(selection.slice(keyIndex + 1)));
      } else {
        // it does not exist so add it
        selection.push(key);
      }
      // update the state
      _this.setState({ selection: selection });

      // update props CNVSelection
      _this.props.onCNVSelection(selection);
    };

    _this.isSelected = function (key) {
      /*
        Instead of passing our external selection state we provide an 'isSelected'
        callback and detect the selection state ourselves. This allows any implementation
        for selection (either an array, object keys, or even a Javascript Set object).
      */
      return _this.state.selection.includes(key);
    };

    _this.state = {
      TableData: null,
      TableColumns: null,
      FilteredData: null,
      FilteredListId: null,
      selection: []
    };
    _this.TableDataSize = null;
    return _this;
  }

  _createClass(CNVTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.GenerateTableInfo();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // Compare incoming Props with current props: new filtering and update when needed

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var ThisLocationString = this.props.location.toString();
      var NextLocationString = nextProps.location.toString();

      if (ThisLocationString !== NextLocationString) {
        //console.log("nextProps ", nextProps.location);
        this.FilterCNVInformation(nextProps.location, this.state.TableData);
      }

      var ThisCNVDataString = this.props.CNVData.toString();
      var NextCNVDataString = nextProps.CNVData.toString();
      if (ThisCNVDataString !== NextCNVDataString) {
        this.ReInitializeState();
        this.GenerateTableInfo(nextProps.CNVData);
      }
    }
  }, {
    key: 'ReInitializeState',
    value: function ReInitializeState() {
      this.setState({
        TableData: null,
        TableColumns: null,
        FilteredData: null,
        FilteredListId: null,
        selection: []
      });
    }

    // Update state of TableData

  }, {
    key: 'UpdateTableData',
    value: function UpdateTableData(data) {
      this.setState(function () {
        return {
          TableData: data
        };
      });
    }

    // Update state of TableData

  }, {
    key: 'UpdateTableColumns',
    value: function UpdateTableColumns(columns) {
      this.setState(function () {
        return {
          TableColumns: columns
        };
      });
    }

    // Update state of FilteredData

  }, {
    key: 'UpdateFilteredData',
    value: function UpdateFilteredData(data) {
      this.setState(function () {
        return {
          FilteredData: data
        };
      });
    }

    // Update state of FilteredListId

  }, {
    key: 'UpdateFilteredListId',
    value: function UpdateFilteredListId(ListId) {
      this.setState(function () {
        return {
          FilteredListId: ListId
        };
      });
    }
  }, {
    key: 'GenerateTableInfo',
    value: function GenerateTableInfo(CNVData) {

      if (CNVData === undefined) CNVData = this.props.CNVData;

      // Create Table Data including uid
      var Data = GenerateTableData(CNVData);
      this.UpdateTableData(Data);

      // Table Data size (for table display)
      this.TableDataSize = Data.length;

      // Create Table Column information
      var Columns = GenerateTableColumns(Data);
      this.UpdateTableColumns(Columns);

      // Filter CNV Information
      this.FilterCNVInformation(this.props.location, Data);
    }
  }, {
    key: 'FilterCNVInformation',
    value: function FilterCNVInformation(location, data) {
      // Filter CNV Info
      var FilteredData = FilterInfo(location, data);
      this.UpdateFilteredData(FilteredData);

      // Get only Id in an array (instead of full filtered data)
      var FilteredListId = GetFilteredListId(FilteredData);
      this.UpdateFilteredListId(FilteredListId);
    }

    // ToggleSelection in Table component


    // Internal function for table component

  }, {
    key: 'handleRowClick',


    // function to handle row click
    value: function handleRowClick(rowInfo) {
      this.props.onRowEnter(rowInfo.row);
    }

    // handle Table background info

  }, {
    key: 'handleRowBackground',
    value: function handleRowBackground(rowInfo) {
      var Color = null;
      var isFiltered = this.state.FilteredListId.includes(rowInfo.original._id);
      //if (rowInfo.original._id === 'chr3-63821946') {
      if (isFiltered) {
        //Color = "rgb(182,190,254)";  
        Color = 'PowderBlue';
      }
      return Color;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var toggleSelection = this.toggleSelection,
          isSelected = this.isSelected;
      var _state = this.state,
          TableData = _state.TableData,
          TableColumns = _state.TableColumns;


      var checkboxProps = {
        isSelected: isSelected,
        toggleSelection: toggleSelection
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          TableData && TableColumns && _react2.default.createElement(CheckboxTable, _extends({
            ref: function ref(r) {
              return _this2.checkboxTable = r;
            },
            data: TableData,
            columns: TableColumns,
            defaultPageSize: this.TableDataSize,
            style: {
              height: "400px"
            },
            className: '-striped -highlight',
            showPagination: false
          }, checkboxProps, {
            getTrProps: function getTrProps(state, rowInfo) {
              var props = {
                onClick: function onClick(e) {
                  return _this2.handleRowClick(rowInfo);
                },
                style: {
                  background: _this2.handleRowBackground(rowInfo)
                }
              };
              return props;
            }
          }))
        )
      );
    }
  }]);

  return CNVTable;
}(_react.Component);

CNVTable.propTypes = {
  CNVData: _propTypes2.default.array.isRequired,
  location: _propTypes2.default.array.isRequired,
  onRowEnter: _propTypes2.default.func.isRequired,
  onCNVSelection: _propTypes2.default.func.isRequired
};

exports.default = CNVTable;