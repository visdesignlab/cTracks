import React, { Component } from 'react';
import * as hglib from 'higlass';
import * as ViewConfig from './ViewConfig';
import HiglassUI from './HiglassUI';
import CNVTable from './CNVTable';
import HiglassAPI from './utils/HiglassAPI';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import './Components/HiGlassLauncher.scss';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      APIInfo: null,
    };
    this.UpdateAPIInfo = this.UpdateAPIInfo.bind(this);
  }

  componentDidMount() {
    this.UpdateAPIInfo();
  }

  UpdateAPIInfo() {
    HiglassAPI.fetchLocationAuto()
//    HiglassAPI.fetchLocation('aa')
//    HiglassAPI.fetchViewConfig()
      .then(function(APIInfo) {
        console.log("APIInfo:", APIInfo);
        console.log("APIInfo_Type:", typeof(APIInfo));
        this.setState(function () {
          return {
            APIInfo: APIInfo
          }
        })
      }.bind(this));
    console.log("APIInfo2:", this.state.APIInfo);
  }

  render() {
    // Feature: can add button to choose our initial ViewConfig
    var MyViewConfig = ViewConfig.ViewConfig_Public_Dev;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Copy Number Project</h2>
        </div>
        <div>
          <HiglassUI ViewConfig = {MyViewConfig} />
        </div>
        <div>
          {this.state.APIInfo && <CNVTable location={this.state.APIInfo} />}
        </div>
      </div>
    )
  }
}

export default App;
