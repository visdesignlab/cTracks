import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as hglib from 'higlass';
import * as ViewConfig from './ViewConfig'
//import './Components/HiGlassLauncher.scss';

function TestDisplay (props) {
  return (
    <div>
      <p>TEST!</p>
    </div>
  )
}

function TestDisplayBis (props) {
  return window.hgApi.get('viewConfig')
      .then(function (viewConfig) {
        var vc = JSON.parse(viewConfig);
        console.log('viewUID:', vc.views[0].uid);
        return vc.views[0].uid;
      })
      .then(function (uid) {
        var tmp = "view";
        return (
          <div>
            <p>TESTBIS: {tmp}!</p>
          </div>
        )
      });
}


function testAPI() {
    var Message = "API not defined";
    if (typeof window.hgApi !== "undefined") {
      Message = "API exists";
    }
    return Message;
  }

class App extends Component {

  setUpAPI() {
    var testViewConfig = ViewConfig.ViewConfig_Public_Dev;
    return (
      hglib.createHgComponent(
        document.getElementById('higlass'),
        testViewConfig,
        { bounded: true },
        function (api) {
          window.hgApi = api;
          console.log(window.hgApi);
        }
      )
    )
  }


  // get viewConfig from API
  infoAPI_ViewConfig () {
    //setTimeout(function(){console.log("TimeOut");},1000);
    return window.hgApi.get('viewConfig')
      .then(function (viewConfig) {
        var vc = JSON.parse(viewConfig);
        console.log('viewUID:', vc.views[0].uid);
        return vc.views[0].uid;
      });
  }


  infoAPI(InfoNb) {
    var output_string = '';
    // viewConfig
    if (InfoNb === 1) {
      //var MyConfig = window.hgApi.get('viewConfig','aa');
      //const MyConfig_JSON = JSON.parse(MyConfig);
      //output_string = MyConfig_JSON.views[0].uid

      window.hgApi.get('viewConfig')
        .then(function (viewConfig) {
          var vc = JSON.parse(viewConfig);
          console.log('viewConfig:', vc);
          console.log('viewUID:', vc.views[0].uid);
          console.log('type:', typeof (vc.views[0].uid));
          return vc.views[0].uid;
        })
        .then (function (viewID) {
          output_string = viewID;
          console.log('output_string_In: ', output_string);
        });

      //console.log('output_string_In2: ', output_string);
    }

    // location
    else if (InfoNb === 2) {
      window.hgApi.get('location','aa')
        .then((loc) => console.log('Location', loc))
        .catch((e) => console.warn('No location!', e));
    }
    else {
      output_string = "error!";
    }
    console.log('output_string: ', output_string);
    return output_string
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Copy Number Project</h2>
        </div>
        <div>
          <p>Initial API state: {testAPI()}</p>
        </div>
        <div>
          {this.setUpAPI()}
        </div>
        <div>
          <p>New API state: {testAPI()}</p>
        </div>
        <div>
          <TestDisplay />
        </div>
        <div>
          <p>API Info - viewConfig: {this.infoAPI(1)}</p>
        </div>
        <div>
          <p>API Info - location: {this.infoAPI(2)}</p>
        </div>
      </div>
    );
  }
}


export default App;
