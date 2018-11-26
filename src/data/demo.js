import hamradio from 'hamradio'
import {testCNVTable} from './TestCNVTable.js';

import tracks from '../node_modules/components/CTracksComp/utils/tracks'

const server = "http://155.98.19.129:8989/api/v1"

let demoTracks = [
  {
    server,
    "name": "sim_02_sorted.ballele.hitile",
    "tilesetUid": "hitile-ballele_sim02",
    "uid": "hitile-ballele_sim02-track",
    options: {
      name: "sim_02_sorted.ballele",
      pointColor: "red"
    }
  },
  {
    server,
    "name": "sim_02_sorted.log2_log2.hitile",
    "tilesetUid": "hitile-log2_log2_sim02",
    "uid": "hitile-log2_log2_sim02-track",
    options: {
      name: "sim_02_sorted.log2_log2",
      pointColor: "orange"
    }
  },
  {
    server,
    "name": "sim_02_sorted.log2_qual.hitile",
    "tilesetUid": "hitile-log2_qual_sim02",
    "uid": "hitile-log2_qual_sim02-track",
    options: {
      name: "sim_02_sorted.log2_qual",
      pointColor: "green"
    }
  },
  {
    server,
    "name": "sim_02_sorted.cnv_log2.hitile",
    "tilesetUid": "hitile-cnv_log2_sim02",
    "uid": "hitile-cnv_log2_sim02-track",
    options: {
      name: "sim_02_sorted.cnv_log2",
      pointColor: "turquoise"
    }
  },
  {
    server,
    "name": "sim_02_sorted.reads.hitile",
    "tilesetUid": "hitile-reads_sim02",
    "uid": "hitile-reads_sim02-track",
    options: {
      name: "sim_02_sorted.reads",
      pointColor: "blue"
    }
  }
]

export default function () {
  hamradio.publish('cTracks/variants', testCNVTable)
  hamradio.publish('server/add', server)
  hamradio.publish('server/add', 'http://localhost:8888/api/v1')
  demoTracks.forEach((trackDiffs, i) => {
    let track = tracks.track(trackDiffs, tracks.horizontalPointOptions(trackDiffs.options))
    hamradio.publish('track/add', {
      track,
      global: true,
      focus: true,
      order: i
    })
  })
}
