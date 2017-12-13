import React, { Component } from 'react';
// Note: this two class will be removed
// import * as ViewConfig from './ViewConfig';
// import * as ViewConfig_Test from './ViewConfig_Test';
// Note: final file to generate viewconfig
import GenerateViewConfig from './utils/GenerateViewConfig';
import * as hglib from 'higlass';

import HiglassUI from './HiglassUI';
import CNVTable from './CNVTable';
import HiglassAPI from './utils/HiglassAPI';
import ChromView from './ChromView';
import TracksMenu from './TracksMenu';
import {testCNVTable} from './TestCNVTable.js';
import NGSLink from './NGSLink.js';

import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';
import queryString from 'query-string';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import './Components/HiGlassLauncher.scss';


// Parse CNV BED file as a CSV file
function ParseFile(file, callback) {
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
  "referralAdress": "https://ngs-web-Adress/variant?sampleCatalogId=2&id={ID}",
  "CNVBEDLocation": "https://ngs-web-Adress/variant?sampleCatalogId=2&BED=cnv.bed",
  "tracks": [
    {
      "name": "sim_02_sorted.ballele.hitile",
      "tilesetUid": "hitile-ballele_sim02",
      "label": "sim_02_sorted.ballele",
      "trackType": "ballele",
      "display": {
        "top": true,
        "bottom": true
      }
    },
    {
      "name": "sim_02_sorted.log2_log2.hitile",
      "tilesetUid": "hitile-log2_log2_sim02",
      "label": "sim_02_sorted.log2_log2",
      "trackType": "log2",
      "display": {
        "top": true,
        "bottom": true
      }
    },
    {
      "name": "sim_02_sorted.log2_qual.hitile",
      "tilesetUid": "hitile-log2_qual_sim02",
      "label": "sim_02_sorted.log2_qual",
      "trackType": "log2_qual",
      "display": {
        "top": true,
        "bottom": true
      }
    },
    {
      "name": "sim_02_sorted.cnv_log2.hitile",
      "tilesetUid": "hitile-cnv_log2_sim02",
      "label": "sim_02_sorted.cnv_log2",
      "trackType": "cnv",
      "display": {
        "top": true,
        "bottom": true
      }
    },
    {
      "name": "sim_02_sorted.reads.hitile",
      "tilesetUid": "hitile-reads_sim02",
      "label": "sim_02_sorted.reads",
      "trackType": "reads",
      "display": {
        "top": true,
        "bottom": true
      }
    }
  ]
}


class App extends Component {
  constructor (props) {
    super(props);

    // ListenerID for HiglassAPI
    this.listenerID = null;

    // ViewID: ViewID of Higlass view (not directly used right now...)
    // APIInfo: API location
    // CNVData: BED File information
    // HiglassView: ViewConfig for Higlass
    // InputConfigFile: Input JSON file provided by ARUP
    // CNVSelection: selected CNV samples from analysis
    this.state = {
      ViewID: null,
      APIInfo: null,
      CNVData: null,
      HiglassView: null,
      InputConfigFile: null,
      CNVSelection: null,
    };

    this.InitialInputConfigFile = null;

    this.highlightRegion = null;   // a region that we want highlighted
                                  // in the zoomed-in higlass view
                                  // should be updated in handleTableHover
    //this.NGSLink = null;

    //Binding functions
    this.GenerateHiglassView = this.GenerateHiglassView.bind(this);
    this.UpdateHiglassView = this.UpdateHiglassView.bind(this);
    this.RetrieveViewID = this.RetrieveViewID.bind(this);
    this.RetrieveLocation_Static = this.RetrieveLocation_Static.bind(this);
    this.RetrieveLocation = this.RetrieveLocation.bind(this);
    this.UpdateViewID = this.UpdateViewID.bind(this);
    this.UpdateAPIInfo = this.UpdateAPIInfo.bind(this);
    this.UpdateCNVData = this.UpdateCNVData.bind(this);
    this.UpdateHiglassView = this.UpdateHiglassView.bind(this);
    this.UpdateConfigFile = this.UpdateConfigFile.bind(this);
    this.ProcessCNVFile = this.ProcessCNVFile.bind(this);
    this.LoadConfigFile = this.LoadConfigFile.bind(this);
    this.Reset = this.Reset.bind(this);
    //this.GenerateNGSLink = this.GenerateNGSLink.bind(this);


    this.chromInfo = null;
    // fetch ChromosomeInfo from HiGlass
    // this needs to be specified in a config file somewhere
    hglib.ChromosomeInfo('http://higlass.io/api/v1/chrom-sizes/?id=Ajn_ttUUQbqgtOD4nOt-IA',
      (chromInfo) => {
        this.chromInfo = chromInfo;
      });
  }

  componentWillMount() {

  }

  componentDidMount() {
    //this.RetrieveLocation_Static();

    this.ReadInputAPI();

    this.setState({
      CNVData: testCNVTable,
    });
  }

  componentDidUpdate() {

  }

  // Read Input API from ARUP
  // If no API, read hard-coded config file
  ReadInputAPI() {
    var InputAPI = queryString.parse(this.props.location.search);
    var InputAPI_String = JSON.stringify(InputAPI);

    if (InputAPI_String === '{}') {
      console.log('Warning: no input API!');
      this.InitialInputConfigFile = JSON.parse(JSON.stringify(TMP_InputConfigFile));
      this.UpdateConfigFile(TMP_InputConfigFile);
      this.GenerateHiglassView(TMP_InputConfigFile);
    }
    else {
      console.log('Reading input API...');

      // Warning reading proxyURL due to CORS issue when using the current mock API
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      //const url = 'http://ngsmockapi.azurewebsites.net/api/config/';
      const url = InputAPI["config"];

      axios.get(proxyurl + url)
        .then( response => {
          var ConfigFile = response.data;
          this.InitialInputConfigFile = JSON.parse(JSON.stringify(ConfigFile));
          this.UpdateConfigFile(ConfigFile);
          this.GenerateHiglassView(ConfigFile);
          //console.log('ConfigFile',ConfigFile);
      })
        .catch(error => console.log("Error",error));
    }
  }

  handleHiGlassUpdated() {
    this.RetrieveViewID();
    this.RetrieveLocation();
  }

  // Generate ViewConfig for Higlass
  GenerateHiglassView(ConfigFile) {

    if (ConfigFile === undefined) ConfigFile = this.state.InputConfigFile;

    var HiglassViewConfig = new GenerateViewConfig(
      ConfigFile,
      this.highlightRegion
    );

    //HiglassViewConfig.CreateViewConfigDefault();
    HiglassViewConfig.CreateViewConfig();
    var HiglassView = HiglassViewConfig.getViewConfig();
    this.UpdateHiglassView(HiglassView);

    console.log('ConfigFile',ConfigFile);
    console.log('HIGLASS_VIEW',HiglassView);
  }

  // Update state of HiglassView
  UpdateHiglassView (HiglassView) {
    this.setState(function () {
      return {
        HiglassView: JSON.stringify(HiglassView)
      }
    })    
  }

  // Retrieve ViewID
  RetrieveViewID() {
    //console.log("Retrieving ViewID (static)...");
    HiglassAPI.fetchViewConfig()
      .then(function(ViewUID) {
        this.UpdateViewID(ViewUID);
      }.bind(this));
  }

  // Update state of ViewID
  UpdateViewID(ViewUID) {
    //console.log("ViewUID:", ViewUID);
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
    // console.log("Retrieving location (static)...");
    //HiglassAPI.fetchLocation_ViewUID('aa')
    HiglassAPI.fetchLocation()
      .then(function(location) {
        this.UpdateAPIInfo(location);
      }.bind(this));
  }


  // Retrieve location automatically using API.on
  RetrieveLocation() {
    // console.log("Retrieving location...");

    HiglassAPI.fetchViewConfig()
      .then(function(ViewID) {
        if (this.listenerId) {
          // if we already have a location listener, we need to remove
          // it before adding a new one
          window.hgApi.off('location', this.listenerId, ViewID);
        }
        window.hgApi.on('location', this.UpdateAPIInfo, 
          ViewID , 
          this.ListenerID.bind(this));
      }.bind(this));
  }

  LoadConfigFile(files) {
    let reader = new FileReader();
    reader.onload = (event) => {
      var obj = JSON.parse(event.target.result);
      // console.log('obj', obj);

      this.UpdateConfigFile(obj);
      this.GenerateHiglassView(obj);
   
    };

    reader.readAsText(files[0]);
  }

  // Update state of InputConfigFile
  UpdateConfigFile (File) {
    //console.log("In function: UpdateConfigFile");
    this.setState (function () {
      return {
        InputConfigFile: File
      }
    })    
  }

  ListenerID (id) {
    this.listenerId = id;
  } 

  // Process CNV BED file: upload, parse and update state 
  ProcessCNVFile (files) {
    // console.log("Processing CNVFile...");
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
    //console.log("CNVData:", JSON.stringify(data, null, 2));
    this.setState(function () {
      return {
        CNVData: data
      }
    });
  }

  Reset () {
    console.log("RESET");
    console.log("InitialInputConfigFile",this.InitialInputConfigFile);
    this.UpdateConfigFile(this.InitialInputConfigFile);
    this.GenerateHiglassView(this.InitialInputConfigFile);
  }

  handleRowLeave(row) {

  }

  handleRowEnter(row) {
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

    const rowStart = this.chromInfo
      .chrPositions[row['#chrom']].pos + +row.start;

    const rowEnd = this.chromInfo
      .chrPositions[row['#chrom']].pos + +row.stop;

    this.highlightRegion = [rowStart, rowEnd];
    this.GenerateHiglassView();
  }

  handleCNVSelection (CNVSelection) {
    //this.CNVSelection = CNVSelection;
    console.log("Table Selection: ", CNVSelection);
    //this.GenerateNGSLink();
    this.UpdateCNVSelection(CNVSelection);
  }

  // Update state of CNV selection
  UpdateCNVSelection(selection) {
    this.setState(function () {
      return {
        CNVSelection: selection
      }
    });
  }  

  // GenerateNGSLink() {
  //   //  "referralAdress": "https://ngs-web-Adress/variant?sampleCatalogId=2&id={ID}",
  //   var referralAdress = this.state.InputConfigFile.referralAdress;
  //   var TemplateID = "&id={ID}";
  //   var newIDList = "";

  //   if (this.CNVSelection != null) {
  //     for (var i = 0; i < this.CNVSelection.length; i++) {
  //       let newID = TemplateID.replace("ID",this.CNVSelection[i]);
  //       newIDList = newIDList + newID;
  //     }
  //     referralAdress = referralAdress.replace(TemplateID,newIDList);
  //   }
  //   else {
  //     let newIDList = TemplateID.replace("ID","");
  //     referralAdress = referralAdress.replace(TemplateID,newIDList);  
  //   }

  //   console.log("referralAdress",referralAdress);
  //   this.NGSLink = referralAdress;
  // }

  render() {
    // Feature: can add button to choose our initial ViewConfig
    //var MyViewConfig = ViewConfig_Test.ViewConfig_Artificial_LocalData;
    //var MyViewConfig = ViewConfig.ViewConfig_DualView;
    return (
      <div className="App">
        <div className="App-header">
          <h2>cTracks</h2>
        </div>

        <div className = "TopContainer">

          <div className = "LeftPanel">
            <div className = "Box">
              <label>Loading Input files</label>

              <div className = "FileReader">
                <ReactFileReader  handleFiles={this.LoadConfigFile} fileTypes={'*'}>
                  <button className="btn btn-default">Load Input Config File</button>
                </ReactFileReader>
              </div>

              <div className = "FileReader">
                <ReactFileReader handleFiles={this.ProcessCNVFile} fileTypes={'.bed, .tsv'}>
                  <button className="btn btn-default">Load CNV BED File</button>
                </ReactFileReader>
              </div>    

            </div>

            <div className = "Box">
              { this.state.InputConfigFile ?
                <TracksMenu ConfigFile = {this.state.InputConfigFile} UpdateDisplay = {this.GenerateHiglassView}
                /> : null
              }
            </div>

            <div className = "Box">
              <label>Higlass - Update bottom view</label>
              <ChromView />
            </div>

            <div className = "Box">
              <label>CNV analysis - Send results</label>
              { this.state.InputConfigFile && this.state.CNVSelection ?
                <NGSLink 
                  referralAdress={this.state.InputConfigFile.referralAdress}
                  CNVSelection={this.state.CNVSelection} 
                /> : null
              }
            </div>
          </div>

          <div className = "RightPanel">
            <div className = "RightBox">
              { this.state.HiglassView ?
                <HiglassUI 
                onHiglassUpdated = {this.handleHiGlassUpdated.bind(this)}
                ViewConfig = {this.state.HiglassView} 
                /> : null 
              }
            </div>
            <div>
              {this.state.APIInfo && this.state.CNVData && 
              <CNVTable 
                CNVData={this.state.CNVData}
                location={this.state.APIInfo}
                onRowEnter={this.handleRowEnter.bind(this)}
                onCNVSelection={this.handleCNVSelection.bind(this)}
              />}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

                // <div>
                //   <a href={this.NGSLink} target="_blank">NGS Link with CNV samples</a>
                // </div>

            // <div>
            //   {this.state.APIInfo && this.state.CNVData && 
            //   <CNVTable 
            //     CNVData={this.state.CNVData} 
            //     location={this.state.APIInfo} 
            //     onRowEnter={this.handleRowEnter.bind(this)}
            //     onRowLeave={this.handleRowLeave.bind(this)}
            //   />}
            // </div>

            // <div className = "Box">
            //   <label>Reset View</label>
            //   <div className = "FileReader">
            //       <button className="btn btn-default" onClick={this.Reset}>Reset</button>
            //   </div>
            // </div>

export default App;
