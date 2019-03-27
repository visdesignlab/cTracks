import hamradio from 'hamradio'
import {testCNVTable} from './TestCNVTable.js';

import tracks from '../node_modules/components/CTracksComp/utils/tracks'

const server = "http://155.98.19.129:8989/api/v1"

let demoTracks = [
  {
    server,
    "name": "sim_02_sorted.ballele.bigwig",
    "tilesetUid": "bigwig-ballele_sim02",
    "uid": "bigwig-ballele_sim02-tileset",
    "filetype": "bigwig",
    options: {
      name: "sim_02_sorted.ballele",
      pointColor: "red"
    }
  },
  {
    server,
    "name": "sim_02_sorted.log2_log2.bigwig",
    "tilesetUid": "bigwig-log2_log2_sim02",
    "uid": "bigwig-log2_log2_sim02-tileset",
    "filetype": "bigwig",
    options: {
      name: "sim_02_sorted.log2_log2",
      pointColor: "orange"
    }
  },
  {
    server,
    "name": "sim_02_sorted.log2_qual.bigwig",
    "tilesetUid": "bigwig-log2_qual_sim02",
    "uid": "bigwig-log2_qual_sim02-tileset",
    "filetype": "bigwig",
    options: {
      name: "sim_02_sorted.log2_qual",
      pointColor: "green"
    }
  },
  {
    server,
    "name": "sim_02_sorted.cnv_log2.bigwig",
    "tilesetUid": "bigwig-cnv_log2_sim02",
    "uid": "bigwig-cnv_log2_sim02-tileset",
    "filetype": "bigwig",
    options: {
      name: "sim_02_sorted.cnv_log2",
      pointColor: "turquoise"
    }
  },
  {
    server,
    "name": "sim_02_sorted.reads.bigwig",
    "tilesetUid": "bigwig-reads_sim02",
    "uid": "bigwig-reads_sim02-tileset",
    "filetype": "bigwig",
    options: {
      name: "sim_02_sorted.reads",
      pointColor: "blue"
    }
  }
]

export default function () {
  hamradio.publish('variants', testCNVTable)
  hamradio.publish('features/cnv', {
    color: 'gray',
    locations: testCNVTable.map(cnv => [[cnv['#chrom'], cnv['start']], [cnv['#chrom'], cnv['stop']]])
  })
  hamradio.publish('server/add', {name: 'Demo', api: server})
  hamradio.publish('tools', {
    zoom: true,
    servers: true,
    urls: true,
    tracks: true,
    addtracks: true,
    removetracks: true
  })
  demoTracks.forEach((trackDiffs, i) => {
    let tileset = tracks.track(trackDiffs, tracks.options['horizontal-point'](trackDiffs.options))
    hamradio.publish('track/add', {
      tilesets: {[tileset.uid]: tileset},
      global: true,
      focus: true,
      order: i,
      uid: `${tileset.uid}-track`
    })
  })
}
