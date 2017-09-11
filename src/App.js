import React, { Component } from 'react';
import './App.css';
import { createHgComponent } from 'higlass';
import {testViewConfig} from './config'
import './Components/HiGlassLauncher.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Copy Number Project</h2>
        </div>

          {createHgComponent(
          document.getElementById('higlass'),
          testViewConfig,
          { bounded: true },
          function (api) {
              window.hgApi = api;
          }
      )}        
      </div>
    );
  }
}

export default App;
