import React, { Component } from 'react';
import './App.css';
import * as hglib from 'higlass';
import * as ViewConfig from './ViewConfig'
//import './Components/HiGlassLauncher.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    var testViewConfig = ViewConfig.ViewConfig_Default;
    //window.higlassApi;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Copy Number Project</h2>
        </div>
        <div>

          {hglib.createHgComponent(
            document.getElementById('higlass'),
            testViewConfig,
            { bounded: true },
            function (api) {
              window.hgApi = api;
            }
          )}
        </div>
      </div>
    );
  }
}

export default App;
