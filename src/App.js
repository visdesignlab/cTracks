import React, { Component } from 'react';
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
    //this.UpdateAPIInfo2();
  }

  UpdateAPIInfo() {
    console.log("UpdateAPIInfo...");
    //HiglassAPI.fetchLocation('aa')
    HiglassAPI.fetchLocationAuto()
      .then(function(APIInfo) {
        console.log("APIInfo:", APIInfo);
        this.setState(function () {
          return {
            APIInfo: APIInfo
          }
        })
      }.bind(this));
  }

  UpdateAPIInfo2() {
    console.log("UpdateAPIInfo2...");
/*    var ViewID = HiglassAPI.fetchViewConfig()
      .then((ViewID) => {return ViewID});
    console.log("ViewID", ViewID);

    window.hgApi.on('location', (info) => {
      this.setState({APIInfo: info});
      console.log('We are over here:', info);
    }, ViewID , function (id) {
      console.log('Second Listener ID:', id);
      });
*/

    // Need to improve function (with automated viewID)
    window.hgApi.on('location', (info) => {
      this.setState({APIInfo: info});
      console.log('We are over here:', info);
    }, 'aa' , function (id) {
      console.log('Second Listener ID:', id);
      });      
  }

  render() {
    // Feature: can add button to choose our initial ViewConfig
    var MyViewConfig = ViewConfig.ViewConfig_Public_Dev_Simple;
    return (
      <div className="App">
        <div>
          <HiglassUI ViewConfig = {MyViewConfig} />
        </div>
        <div className = "Button">
          <button onClick={this.UpdateAPIInfo}>UpdateTable</button>
        </div>
        <div>
          {this.state.APIInfo && <CNVTable location={this.state.APIInfo} />}
        </div>
      </div>
    )
  }
}

export default App;
