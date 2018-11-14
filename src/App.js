import React from 'react';

import hamradio from 'hamradio'
import * as hglib from 'higlass';

import demo from './data/demo.js'

import CTracksComp from 'components/CTracksComp';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    let uid = props.match.params.prefix || 'demo'
    hamradio.prefix(uid)

    this.state = {
      chromInfo: null,
      uid
    }

  }

  componentWillMount() {

  }

  componentDidMount() {
    hglib.ChromosomeInfo('http://higlass.io/api/v1/chrom-sizes/?id=Ajn_ttUUQbqgtOD4nOt-IA')
      .then(info => this.setState({chromInfo: info}))

    if (this.state.uid === 'demo')
      demo()

    hamradio.publish('ready/cTracks')
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>cTracks</h2>
        </div>

        <div>
          <CTracksComp
            chromInfo = {this.state.chromInfo}
            uid = {this.state.uid}
          />
        </div>

      </div>
    )
  }
}


export default App;
