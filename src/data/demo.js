import hamradio from 'hamradio'
import {testCNVTable} from './TestCNVTable.js';

const server = "http://155.98.19.129:8989/api/v1"

const optionsTemplate = {
  labelColor: "black",
  labelPosition: "topLeft",
  axisPositionHorizontal: "right",
  pointColor: "red",
  pointSize: 2,
  valueScaling: "linear",
  trackBorderWidth: 1,
  trackBorderColor: "grey",
  labelTextOpacity: 0.4,
  name: "template_label"
}

const trackTemplate = {
  name: "template.hitile",
  server,
  tilesetUid: "template_tilesetUid",
  uid: "uid",
  type: "horizontal-point",
  width: 770,
  height: 38,
  position: "top",
  options: {}
}

let tracks = [
  {
    "name": "sim_02_sorted.ballele.hitile",
    "tilesetUid": "hitile-ballele_sim02",
    "uid": "hitile-ballele_sim02-track",
    "trackType": "ballele",
    options: {
      name: "sim_02_sorted.ballele",
      pointColor: "red"
    }
  },
  {
    "name": "sim_02_sorted.log2_log2.hitile",
    "tilesetUid": "hitile-log2_log2_sim02",
    "uid": "hitile-log2_log2_sim02-track",
    "trackType": "log2",
    options: {
      name: "sim_02_sorted.log2_log2",
      pointColor: "orange"
    }
  },
  {
    "name": "sim_02_sorted.log2_qual.hitile",
    "tilesetUid": "hitile-log2_qual_sim02",
    "uid": "hitile-log2_qual_sim02-track",
    "trackType": "log2_qual",
    options: {
      name: "sim_02_sorted.log2_qual",
      pointColor: "green"
    }
  },
  {
    "name": "sim_02_sorted.cnv_log2.hitile",
    "tilesetUid": "hitile-cnv_log2_sim02",
    "uid": "hitile-cnv_log2_sim02-track",
    "trackType": "cnv",
    options: {
      name: "sim_02_sorted.cnv_log2",
      pointColor: "turquoise"
    }
  },
  {
    "name": "sim_02_sorted.reads.hitile",
    "tilesetUid": "hitile-reads_sim02",
    "uid": "hitile-reads_sim02-track",
    "trackType": "reads",
    options: {
      name: "sim_02_sorted.reads",
      pointColor: "blue"
    }
  }
]

export default function () {
  hamradio.publish('cTracks/variants', testCNVTable)
  hamradio.publish('server/add', server)
    .then(() => {
      tracks.forEach(trackDiffs => {
        let track = {
          ...trackTemplate,
          ...trackDiffs,
          options: {
            ...optionsTemplate,
            ...trackDiffs.options
          }
        }
        hamradio.publish('track/add/global', track)
        hamradio.publish('track/add/focus', track)
      })
    })
}
