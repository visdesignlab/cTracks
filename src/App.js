import React, { Component } from 'react';
// Note: this two class will be removed
// import * as ViewConfig from './ViewConfig';
// import * as ViewConfig_Test from './ViewConfig_Test';
// Note: final file to generate viewconfig
import GenerateViewConfig from './utils/GenerateViewConfig';

import HiglassUI from './HiglassUI';
import CNVTable from './CNVTable';
import HiglassAPI from './utils/HiglassAPI';
import ChromView from './ChromView';

import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import './Components/HiGlassLauncher.scss';

// Parse CNV BED file as a CSV file
function ParseFile(file, callback) {
  console.log("Parsing CNV file...");

  Papa.parse(file, {
    //download: true,
    newline: "\n",
    header: true,
    dynamicTyping: true,
    error: function(error) {
      console.log("ERROR Parse:",error);
    },
    complete: function(results) {
      callback(results.data);
    }
  });
}

// WARNING: TEMPORARY Input Config File - it will be replaced by ARUP API JSON file
var TMP_InputConfigFile =
{
  "server": "http://155.98.19.129:8989/api/v1",
  "referralAddress": "https://ngs-web-address/variant?sampleCatalogId=2&chr={chr}&start={start}&end={end}&ref={ref}&alt={alt}",
  "tracks": [
    {
      "name": "sim_02_sorted.ballele.hitile",
      "tilesetUid": "hitile-ballele_sim02",
      "label": "sim_02_sorted.ballele"
    },
    {
      "name": "sim_02_sorted.log2_log2.hitile",
      "tilesetUid": "hitile-log2_log2_sim02",
      "label": "sim_02_sorted.log2_log2"
    },
    {
      "name": "sim_02_sorted.log2_qual.hitile",
      "tilesetUid": "hitile-log2_qual_sim02",
      "label": "sim_02_sorted.log2_qual"
    },
    {
      "name": "sim_02_sorted.cnv_log2.hitile",
      "tilesetUid": "hitile-cnv_log2_sim02",
      "label": "sim_02_sorted.cnv_log2"
    },
    {
      "name": "sim_02_sorted.reads.hitile",
      "tilesetUid": "hitile-reads_sim02",
      "label": "sim_02_sorted.reads"
    }
  ]
}

class App extends Component {
  constructor (props) {
    super(props);
    // ListenerID for HiglassAPI
    this.listenerID = null;
    // Input JSON file provided by ARUP
    this.InputConfigFile = TMP_InputConfigFile;
    // Generated Higlass View, based on input data and config template
    this.HiglassView = null;
    // ViewID: ViewID of Higlass view (not directly used right now...)
    // APIInfo: API location
    // CNVData: BED File information
    this.state = {
      ViewID: null,
      APIInfo: null,
      CNVData: null,
    };

    this.GenerateHiglassView = this.GenerateHiglassView.bind(this);
    this.RetrieveViewID = this.RetrieveViewID.bind(this);
    this.RetrieveLocation_Static = this.RetrieveLocation_Static.bind(this);
    this.RetrieveLocation = this.RetrieveLocation.bind(this);
    this.UpdateAPIInfo = this.UpdateAPIInfo.bind(this);
    this.UpdateViewID = this.UpdateViewID.bind(this);
    this.ProcessCNVFile = this.ProcessCNVFile.bind(this);
    this.UpdateCNVData = this.UpdateCNVData.bind(this);
  }

  componentWillMount() {
    this.GenerateHiglassView();
  }

  componentDidMount() {
    //this.RetrieveLocation_Static();
    this.RetrieveViewID();
    this.RetrieveLocation();
  }

  // Generate ViewConfig for Higlass
  GenerateHiglassView() {
    var HiglassViewConfig = new GenerateViewConfig(this.InputConfigFile);
    //HiglassViewConfig.CreateViewConfigDefault();
    HiglassViewConfig.CreateViewConfig();
    this.HiglassView = HiglassViewConfig.getViewConfig();
    console.log('HIGLASS_VIEW',this.HiglassView);
  }

  // Retrieve ViewID
  RetrieveViewID() {
    console.log("Retrieving ViewID (static)...");
    HiglassAPI.fetchViewConfig()
      .then(function(ViewUID) {
        this.UpdateViewID(ViewUID);
      }.bind(this));
  }

  // Update state of ViewID
  UpdateViewID(ViewUID) {
    console.log("ViewUID:", ViewUID);
    this.setState(function () {
      return {
        ViewID: ViewUID
      }
    })
  }

  // Update state of APIInfo (API location)
  UpdateAPIInfo(location) {
    //console.log("APIInfo:", location);
    this.setState(function () {
      return {
        APIInfo: location
      }
    })
  }

  // Retrieve location (one by one) using API.get
  RetrieveLocation_Static() {
    console.log("Retrieving location (static)...");
    //HiglassAPI.fetchLocation_ViewUID('aa')
    HiglassAPI.fetchLocation()
      .then(function(location) {
        this.UpdateAPIInfo(location);
      }.bind(this));
  }


  // Retrieve location automatically using API.on
  RetrieveLocation() {
    //console.log("Retrieving location...");

    HiglassAPI.fetchViewConfig()
      .then(function(ViewID) {
        window.hgApi.on('location', this.UpdateAPIInfo, ViewID , this.ListenerID);
      }.bind(this));

  }

  ListenerID (id) {
    console.log('Listener ID:', id);
  } 

  // Process CNV BED file: upload, parse and update state 
  ProcessCNVFile (files) {
    console.log("Processing CNVFile...");
    // Loading file
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      // var text = reader.result;
    }
    //reader.readAsText(files[0]);

    ParseFile(files[0], this.UpdateCNVData);  
  }

  // Update state of CNV data
  UpdateCNVData(data) {
    console.log("CNVData:", data);
    this.setState(function () {
      return {
        CNVData: data
      }
    });
  }

  render() {
    // Feature: can add button to choose our initial ViewConfig
    //var MyViewConfig = ViewConfig_Test.ViewConfig_Artificial_LocalData;
    //var MyViewConfig = ViewConfig.ViewConfig_DualView;
    return (
      <div className="App">
        <div>
          <HiglassUI ViewConfig = {this.HiglassView} />
        </div>
        <div className = "Button">
          <ReactFileReader handleFiles={this.ProcessCNVFile} fileTypes={'.bed, .tsv'}>
            <button>Upload CNV File</button>
          </ReactFileReader>
          <button onClick={this.RetrieveLocation}>Initialize Table</button>
          <ChromView />
        </div>
        <div>
          {this.state.APIInfo && this.state.CNVData && <CNVTable CNVData = {this.state.CNVData} location={this.state.APIInfo} />}
        </div>
      </div>
    )
  }
}

export default App;
