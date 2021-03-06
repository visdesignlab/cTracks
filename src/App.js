import React from 'react';

import hamradio from 'hamradio'
import * as hglib from 'higlass';

import demo from './data/demo.js'

import CTracksComp from 'components/CTracksComp';
import ResilientData from 'components/CTracksComp/ResilientData'

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    const hash = props.location.hash.replace(/^#/, '')
    const prefix = hash !== '' ? hash : props.location.pathname.replace(/^\//, '')

    if (prefix !== '') {
      hamradio.prefix(prefix)
    }
    ResilientData.initialize(`cTracks/${prefix}`) // gets it to listen to the events and store critical data, also initializes the data to store what's in SessionStorage

    this.state = {
      chromInfo: null,
      uid: prefix
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    hglib.ChromosomeInfo('http://higlass.io/api/v1/chrom-sizes/?id=Ajn_ttUUQbqgtOD4nOt-IA')
      .then(info => this.setState({chromInfo: info}))

    if (this.state.uid === 'demo' && !ResilientData.servers.get().length)
      demo()

    hamradio.publish('ready/cTracks')
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">

        <CTracksComp
          chromInfo = {this.state.chromInfo}
          uid = {this.state.uid}
        />

      </div>
    )
  }
}


export default App;
