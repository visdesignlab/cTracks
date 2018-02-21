import React, { Component } from 'react';

import queryString from 'query-string';
import axios from 'axios';

import CTracksComp from 'components/CTracksComp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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

    this.state = {
      InputFile: null,
    }


    //Binding functions
    //this.ReadInputAPI = this.ReadInputAPI.bind(this);

  }

  componentWillMount() {

  }

  componentDidMount() {

    this.ReadInputAPI();

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
      //this.InputFile = JSON.parse(JSON.stringify(TMP_InputConfigFile));
      this.setState(function () {
        return {
          InputFile: JSON.parse(JSON.stringify(TMP_InputConfigFile))
        }
      }) 
    }
    else {
      console.log('Reading input API...');

      // Warning reading proxyURL due to CORS issue when using the current mock API
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      //const url = 'http://ngsmockapi.azurewebsites.net/api/config/';
      const url = InputAPI["config"];

      axios.get(url)
        .then( response => {
          var ConfigFile = response.data;
          //this.InputFile = JSON.parse(JSON.stringify(ConfigFile));
          this.setState(function () {
            return {
              InputFile: JSON.parse(JSON.stringify(ConfigFile))
            }
          }) 
      })
        .catch(error => console.log("Error",error));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>cTracks</h2>
        </div>

        <div>
          { this.state.InputFile ? 
            <CTracksComp InputFile = {this.state.InputFile} /> : null 
          }
        </div>

      </div>
    )
  }
}


export default App;
