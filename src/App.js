import React, { Component } from 'react';
import * as ViewConfig from './ViewConfig';
import * as ViewConfig_Test from './ViewConfig_Test';

import HiglassUI from './HiglassUI';
import CNVTable from './CNVTable';
import HiglassAPI from './utils/HiglassAPI';
import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import './Components/HiGlassLauncher.scss';

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

class App extends Component {
  constructor (props) {
    super(props);
    this.listenerID = null;
    this.state = {
      APIInfo: null,
      CNVData: null,
    };
    this.UpdateLocation = this.UpdateLocation.bind(this);
    this.UpdateLocation2 = this.UpdateLocation2.bind(this);
    this.UpdateAPIInfo = this.UpdateAPIInfo.bind(this);
    this.ProcessCNVFile = this.ProcessCNVFile.bind(this);
    this.UpdateCNVData = this.UpdateCNVData.bind(this);
  }

  componentDidMount() {
    //this.UpdateLocation();
    //this.UpdateLocation2();
  }

  UpdateAPIInfo(location) {
    console.log("APIInfo:", location);
    this.setState(function () {
      return {
        APIInfo: location
      }
    })
  }

  UpdateLocation() {
    console.log("Updating location...");
    //HiglassAPI.fetchLocation('aa')
    HiglassAPI.fetchLocationAuto()
      .then(function(location) {
        this.UpdateAPIInfo(location);
      }.bind(this));
  }

  ListenerID (id) {
    console.log('Listener ID:', id);
  } 

  UpdateLocation2() {
    console.log("Updating location2...");
    HiglassAPI.fetchViewConfig()
      .then(function(ViewID) {
        console.log("ViewID_in", ViewID);
        window.hgApi.on('location', this.UpdateAPIInfo, ViewID , this.ListenerID);
      }.bind(this));

    //window.hgApi.on('location', this.UpdateAPIInfo, 'aa' , this.ListenerID);

  }

  ProcessCNVFile (files) {
    console.log("Processing CNVFile...");
    // Loading file
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      var text = reader.result;
    }
    //reader.readAsText(files[0]);

    ParseFile(files[0], this.UpdateCNVData);  
  }

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
    var MyViewConfig = ViewConfig.ViewConfig_DualView;
    return (
      <div className="App">
        <div>
          <HiglassUI ViewConfig = {MyViewConfig} />
        </div>
        <div className = "Button">
          <ReactFileReader handleFiles={this.ProcessCNVFile} fileTypes={'.bed, .tsv'}>
            <button>Upload CNV File</button>
          </ReactFileReader>
          <button onClick={this.UpdateLocation2}>Initialize Table</button>
        </div>
        <div>
          {this.state.APIInfo && this.state.CNVData && <CNVTable CNVData = {this.state.CNVData} location={this.state.APIInfo} />}
        </div>
      </div>
    )
  }
}

export default App;
