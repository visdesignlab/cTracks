'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GenerateViewConfig = require('./utils/GenerateViewConfig');

var _GenerateViewConfig2 = _interopRequireDefault(_GenerateViewConfig);

var _higlass = require('higlass');

var hglib = _interopRequireWildcard(_higlass);

var _HiglassUI = require('./HiglassUI');

var _HiglassUI2 = _interopRequireDefault(_HiglassUI);

var _CNVTable = require('./CNVTable');

var _CNVTable2 = _interopRequireDefault(_CNVTable);

var _HiglassAPI = require('./utils/HiglassAPI');

var _HiglassAPI2 = _interopRequireDefault(_HiglassAPI);

var _ChromView = require('./ChromView');

var _ChromView2 = _interopRequireDefault(_ChromView);

var _TracksMenu = require('./TracksMenu');

var _TracksMenu2 = _interopRequireDefault(_TracksMenu);

var _TestCNVTable = require('./TestCNVTable.js');

var _NGSLink = require('./NGSLink.js');

var _NGSLink2 = _interopRequireDefault(_NGSLink);

var _reactFileReader = require('react-file-reader');

var _reactFileReader2 = _interopRequireDefault(_reactFileReader);

var _papaparse = require('papaparse');

var _papaparse2 = _interopRequireDefault(_papaparse);

require('./CTracksComp.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Note: this two class will be removed
// import * as ViewConfig from './ViewConfig';
// import * as ViewConfig_Test from './ViewConfig_Test';
// Note: final file to generate viewconfig


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import './Components/HiGlassLauncher.scss';


// Parse CNV BED file as a CSV file
function ParseFile(file, callback) {
  _papaparse2.default.parse(file, {
    //download: true,
    newline: "\n",
    header: true,
    dynamicTyping: true,
    error: function error(_error) {
      console.log("ERROR Parse:", _error);
    },
    complete: function complete(results) {
      callback(results.data);
    }
  });
}

var CTracksComp = function (_Component) {
  _inherits(CTracksComp, _Component);

  function CTracksComp(props) {
    _classCallCheck(this, CTracksComp);

    // ListenerID for HiglassAPI
    var _this = _possibleConstructorReturn(this, (CTracksComp.__proto__ || Object.getPrototypeOf(CTracksComp)).call(this, props));

    _this.listenerID = null;

    // ViewID: ViewID of Higlass view (not directly used right now...)
    // APIInfo: API location
    // CNVData: BED File information
    // HiglassView: ViewConfig for Higlass
    // InputConfigFile: Input JSON file provided by ARUP
    // CNVSelection: selected CNV samples from analysis
    _this.state = {
      ViewID: null,
      APIInfo: null,
      CNVData: null,
      HiglassView: null,
      InputConfigFile: null,
      CNVSelection: null
    };

    _this.InitialInputConfigFile = null;

    _this.highlightRegion = null; // a region that we want highlighted
    // in the zoomed-in higlass view
    // should be updated in handleTableHover

    //Binding functions
    _this.GenerateHiglassView = _this.GenerateHiglassView.bind(_this);
    _this.UpdateHiglassView = _this.UpdateHiglassView.bind(_this);
    _this.RetrieveViewID = _this.RetrieveViewID.bind(_this);
    _this.RetrieveLocation_Static = _this.RetrieveLocation_Static.bind(_this);
    _this.RetrieveLocation = _this.RetrieveLocation.bind(_this);
    _this.UpdateViewID = _this.UpdateViewID.bind(_this);
    _this.UpdateAPIInfo = _this.UpdateAPIInfo.bind(_this);
    _this.UpdateCNVData = _this.UpdateCNVData.bind(_this);
    _this.UpdateHiglassView = _this.UpdateHiglassView.bind(_this);
    _this.UpdateConfigFile = _this.UpdateConfigFile.bind(_this);
    _this.ProcessCNVFile = _this.ProcessCNVFile.bind(_this);
    _this.LoadConfigFile = _this.LoadConfigFile.bind(_this);
    _this.Reset = _this.Reset.bind(_this);

    _this.chromInfo = null;
    // fetch ChromosomeInfo from HiGlass
    // this needs to be specified in a config file somewhere
    hglib.ChromosomeInfo('http://higlass.io/api/v1/chrom-sizes/?id=Ajn_ttUUQbqgtOD4nOt-IA', function (chromInfo) {
      _this.chromInfo = chromInfo;
    });
    return _this;
  }

  _createClass(CTracksComp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this.RetrieveLocation_Static();

      this.ReadInputFile();

      this.setState({
        CNVData: _TestCNVTable.testCNVTable
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // Read Input File

  }, {
    key: 'ReadInputFile',
    value: function ReadInputFile() {
      this.InitialInputConfigFile = JSON.parse(JSON.stringify(this.props.InputFile));
      this.UpdateConfigFile(this.props.InputFile);
      this.GenerateHiglassView(this.props.InputFile);
    }
  }, {
    key: 'handleHiGlassUpdated',
    value: function handleHiGlassUpdated() {
      this.RetrieveViewID();
      this.RetrieveLocation();
    }

    // Generate ViewConfig for Higlass

  }, {
    key: 'GenerateHiglassView',
    value: function GenerateHiglassView(ConfigFile) {

      if (ConfigFile === undefined) ConfigFile = this.state.InputConfigFile;

      var HiglassViewConfig = new _GenerateViewConfig2.default(ConfigFile, this.highlightRegion);

      //HiglassViewConfig.CreateViewConfigDefault();
      HiglassViewConfig.CreateViewConfig();
      var HiglassView = HiglassViewConfig.getViewConfig();
      this.UpdateHiglassView(HiglassView);

      //console.log('ConfigFile',ConfigFile);
      //console.log('HIGLASS_VIEW',HiglassView);
    }

    // Update state of HiglassView

  }, {
    key: 'UpdateHiglassView',
    value: function UpdateHiglassView(HiglassView) {
      this.setState(function () {
        return {
          HiglassView: JSON.stringify(HiglassView)
        };
      });
    }

    // Retrieve ViewID

  }, {
    key: 'RetrieveViewID',
    value: function RetrieveViewID() {
      //console.log("Retrieving ViewID (static)...");
      _HiglassAPI2.default.fetchViewConfig().then(function (ViewUID) {
        this.UpdateViewID(ViewUID);
      }.bind(this));
    }

    // Update state of ViewID

  }, {
    key: 'UpdateViewID',
    value: function UpdateViewID(ViewUID) {
      //console.log("ViewUID:", ViewUID);
      this.setState(function () {
        return {
          ViewID: ViewUID
        };
      });
    }

    // Update state of APIInfo (API location)

  }, {
    key: 'UpdateAPIInfo',
    value: function UpdateAPIInfo(location) {
      //console.log("APIInfo:", location);
      this.setState(function () {
        return {
          APIInfo: location
        };
      });
    }

    // Retrieve location (one by one) using API.get

  }, {
    key: 'RetrieveLocation_Static',
    value: function RetrieveLocation_Static() {
      // console.log("Retrieving location (static)...");
      //HiglassAPI.fetchLocation_ViewUID('aa')
      _HiglassAPI2.default.fetchLocation().then(function (location) {
        this.UpdateAPIInfo(location);
      }.bind(this));
    }

    // Retrieve location automatically using API.on

  }, {
    key: 'RetrieveLocation',
    value: function RetrieveLocation() {
      // console.log("Retrieving location...");

      _HiglassAPI2.default.fetchViewConfig().then(function (ViewID) {
        if (this.listenerId) {
          // if we already have a location listener, we need to remove
          // it before adding a new one
          window.hgApi.off('location', this.listenerId, ViewID);
        }
        window.hgApi.on('location', this.UpdateAPIInfo, ViewID, this.ListenerID.bind(this));
      }.bind(this));
    }
  }, {
    key: 'LoadConfigFile',
    value: function LoadConfigFile(files) {
      var _this2 = this;

      var reader = new FileReader();
      reader.onload = function (event) {
        var obj = JSON.parse(event.target.result);
        // console.log('obj', obj);

        _this2.UpdateConfigFile(obj);
        _this2.GenerateHiglassView(obj);
      };

      reader.readAsText(files[0]);
    }

    // Update state of InputConfigFile

  }, {
    key: 'UpdateConfigFile',
    value: function UpdateConfigFile(File) {
      //console.log("In function: UpdateConfigFile");
      this.setState(function () {
        return {
          InputConfigFile: File
        };
      });
    }
  }, {
    key: 'ListenerID',
    value: function ListenerID(id) {
      this.listenerId = id;
    }

    // Process CNV BED file: upload, parse and update state 

  }, {
    key: 'ProcessCNVFile',
    value: function ProcessCNVFile(files) {
      // console.log("Processing CNVFile...");
      // Loading file
      var reader = new FileReader();
      reader.onload = function (e) {}
      // Use reader.result
      // var text = reader.result;

      //reader.readAsText(files[0]);
      ;this.UpdateCNVSelection(null);
      ParseFile(files[0], this.UpdateCNVData);
    }

    // Update state of CNV data

  }, {
    key: 'UpdateCNVData',
    value: function UpdateCNVData(data) {
      //console.log("CNVData:", JSON.stringify(data, null, 2));
      this.setState(function () {
        return {
          CNVData: data
        };
      });
    }
  }, {
    key: 'Reset',
    value: function Reset() {
      console.log("RESET");
      console.log("InitialInputConfigFile", this.InitialInputConfigFile);
      this.UpdateConfigFile(this.InitialInputConfigFile);
      this.GenerateHiglassView(this.InitialInputConfigFile);
    }
  }, {
    key: 'handleRowLeave',
    value: function handleRowLeave(row) {}
  }, {
    key: 'handleRowEnter',
    value: function handleRowEnter(row) {
      /**
       * The user has hovered over a row of the CNV table so 
       * we may want to update the view and highlight the region
       * that was highlighted.
       *
       * Parameters
       * ----------
       *  chr: string
       *  startPos: int
       *  endPos: int
       *
       * Returns
       * -------
       *  (nothing)
       *    Just has side effects
       */
      if (!this.chromInfo) {
        // we don't have any assembly information so we can't
        // highlight this region
        return;
      }

      var rowStart = this.chromInfo.chrPositions[row['#chrom']].pos + +row.start;

      var rowEnd = this.chromInfo.chrPositions[row['#chrom']].pos + +row.stop;

      this.highlightRegion = [rowStart, rowEnd];
      this.GenerateHiglassView();
    }
  }, {
    key: 'handleCNVSelection',
    value: function handleCNVSelection(CNVSelection) {
      //console.log("Table Selection: ", CNVSelection);
      this.UpdateCNVSelection(CNVSelection);
    }

    // Update state of CNV selection

  }, {
    key: 'UpdateCNVSelection',
    value: function UpdateCNVSelection(selection) {
      this.setState(function () {
        return {
          CNVSelection: selection
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // Feature: can add button to choose our initial ViewConfig
      //var MyViewConfig = ViewConfig_Test.ViewConfig_Artificial_LocalData;
      //var MyViewConfig = ViewConfig.ViewConfig_DualView;
      return _react2.default.createElement(
        'div',
        { className: 'TopContainer' },
        _react2.default.createElement(
          'div',
          { className: 'LeftPanel' },
          _react2.default.createElement(
            'div',
            { className: 'Box' },
            _react2.default.createElement(
              'label',
              null,
              'Loading input files'
            ),
            _react2.default.createElement(
              'div',
              { className: 'FileReader' },
              _react2.default.createElement(
                _reactFileReader2.default,
                { handleFiles: this.LoadConfigFile, fileTypes: '*' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default' },
                  'Load Input Config File'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'FileReader' },
              _react2.default.createElement(
                _reactFileReader2.default,
                { handleFiles: this.ProcessCNVFile, fileTypes: '.bed, .tsv' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default' },
                  'Load CNV BED File'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Box' },
            this.state.InputConfigFile ? _react2.default.createElement(_TracksMenu2.default, { ConfigFile: this.state.InputConfigFile, UpdateDisplay: this.GenerateHiglassView
            }) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'Box' },
            _react2.default.createElement(
              'label',
              null,
              'Higlass - Update bottom view'
            ),
            _react2.default.createElement(_ChromView2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'Box' },
            _react2.default.createElement(
              'label',
              null,
              'CNV analysis - Apply results'
            ),
            this.state.InputConfigFile && this.state.CNVSelection ? _react2.default.createElement(_NGSLink2.default, {
              referralAdress: this.state.InputConfigFile.referralAdress,
              CNVSelection: this.state.CNVSelection
            }) : null
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'RightPanel' },
          _react2.default.createElement(
            'div',
            { className: 'RightBox' },
            this.state.HiglassView ? _react2.default.createElement(_HiglassUI2.default, {
              onHiglassUpdated: this.handleHiGlassUpdated.bind(this),
              ViewConfig: this.state.HiglassView
            }) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'RightBox' },
            this.state.APIInfo && this.state.CNVData && _react2.default.createElement(_CNVTable2.default, {
              CNVData: this.state.CNVData,
              location: this.state.APIInfo,
              onRowEnter: this.handleRowEnter.bind(this),
              onCNVSelection: this.handleCNVSelection.bind(this)
            })
          )
        )
      );
    }
  }]);

  return CTracksComp;
}(_react.Component);

CTracksComp.propTypes = {
  InputFile: _propTypes2.default.object.isRequired
};

exports.default = CTracksComp;