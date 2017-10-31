import axios from 'axios';
import RandomGenerator from './random';

// WARNING: TEMPORARY Input Config File - it will be replaced by ARUP API JSON file
var TMP_InputConfigFile =
{
  "server": "http://localhost:8989/api/v1",
  "referralAddress": "https://ngs-web-address/variant?sampleCatalogId=2&chr={chr}&start={start}&end={end}&ref={ref}&alt={alt}",
  "tracks": [
    {
      "name": "sim_02_sorted.ballele.hitile",
      "tilesetUid": "hitile-ballele_sim02",
      "label": "sim_02_sorted.ballele"
    },
    {
      "name": "sim_02_sorted.log2_log2.hitile",
      "tilesetUid": "hitile-log2_log2_sim02",
      "label": "sim_02_sorted.log2_log2"
    },
    {
      "name": "sim_02_sorted.log2_qual.hitile",
      "tilesetUid": "hitile-log2_qual_sim02",
      "label": "sim_02_sorted.log2_qual"
    },
    {
      "name": "sim_02_sorted.cnv_log2.hitile",
      "tilesetUid": "hitile-cnv_log2_sim02",
      "label": "sim_02_sorted.cnv_log2"
    },
    {
      "name": "sim_02_sorted.reads.hitile",
      "tilesetUid": "hitile-reads_sim02",
      "label": "sim_02_sorted.reads"
    }
  ]
}

// My Template for dual view
var ViewConfig_Default_Dual =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://higlass.io/api/v1",
    "http://localhost:8989/api/v1"
  ],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "bpRZDog1QQuZ7DmLfsKwXw",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 770,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "initialXDomain": [
        -41025571.69653028,
        3308767330.621793
      ],
      "initialYDomain": [
        1224557763.339768,
        1320266131.9774342
      ],
      "layout": {
        "w": 12,
        "h": 7,
        "x": 0,
        "y": 0,
        "i": "eN9c0VphSmOaptnJ6cOTdg",
        "moved": false,
        "static": false
      },
      "uid": "eN9c0VphSmOaptnJ6cOTdg"
    },
    {
      "uid": "cc",
      "initialXDomain": [
        492449995.00002545,
        690472424.9999747
      ],
      "initialYDomain": [
        1034889589.6623386,
        1037204137.545455
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoId": "b37",
        "chromInfoServer": "http://higlass.io/api/v1",
        "visible": true
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "name": "Gene Annotations (hg19)",
            "created": "2017-02-05T19:31:52.412319Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "uid": "NaYcUhtrQyeQhqz9gJOjxQ",
            "type": "horizontal-gene-annotations",
            "options": {
              "labelColor": "black",
              "labelPosition": "hidden",
              "plusStrandColor": "blue",
              "minusStrandColor": "red",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "name": "Gene Annotations (hg19)"
            },
            "width": 20,
            "height": 55,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "bpRZDog1QQuZ7DmLfsKwXw",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 770,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "layout": {
        "w": 12,
        "h": 8,
        "x": 0,
        "y": 7,
        "i": "cc",
        "moved": false,
        "static": false
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
}

// Example with DualView (using sim_02 data)
var ViewConfig_DualView_Init = 
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://higlass.io/api/v1",
    "http://localhost:8989/api/v1"
  ],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "type": "combined",
            "uid": "WTom2np0Sq60RM4AEgeTqQ",
            "height": 38,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.ballele.hitile",
                "created": "2017-08-23T00:28:24.510319Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-ballele_sim02",
                "uid": "O037fITLR5ytaM-OwFz9sQ",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "red",
                  "pointSize": 2,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.ballele.hitile"
                },
                "width": 770,
                "height": 38,
                "position": "top"
              },
              {
                "uid": "Z2Qq5wzuSkugGNASkT-wSA",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "cc",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "type": "combined",
            "uid": "YSp-FsUTQFOARyGGBstKmg",
            "height": 38,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.log2_qual.hitile",
                "created": "2017-08-23T00:28:37.306697Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-log2_qual_sim02",
                "uid": "IUkubwUBTdGfkvicGHJpzQ",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "orange",
                  "pointSize": 2,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.log2_qual.hitile"
                },
                "width": 770,
                "height": 38,
                "position": "top"
              },
              {
                "uid": "ZqolykfVRWqd_w9m7Pk0Ww",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "cc",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "type": "combined",
            "uid": "A0-maEOsQqil1LNpeMop5Q",
            "height": 38,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.log2_log2.hitile",
                "created": "2017-08-23T00:28:35.146995Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-log2_log2_sim02",
                "uid": "AkxtpXfXR7aZSZpIrdRwGg",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "bottomLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "green",
                  "pointSize": 2,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.log2_log2.hitile"
                },
                "width": 770,
                "height": 38,
                "position": "top"
              },
              {
                "uid": "c5aJ2i1PQbKwbq5aDxrpRA",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "cc",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "type": "combined",
            "uid": "DMVnWRH4RWWP9Oh25oE53A",
            "height": 38,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.cnv_log2.hitile",
                "created": "2017-08-23T00:28:28.708220Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-cnv_log2_sim02",
                "uid": "JUSDVte6Saae93sUgHODMQ",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "bottomLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "turquoise",
                  "pointSize": 2,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.cnv_log2.hitile"
                },
                "width": 770,
                "height": 38,
                "position": "top"
              },
              {
                "uid": "U9txBTtTTDqVBd_jiJo6OQ",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "cc",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "type": "combined",
            "uid": "S81mNFKwQWus-LI5tEj6Aw",
            "height": 38,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.reads.hitile",
                "created": "2017-08-23T00:28:39.434323Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-reads_sim02",
                "uid": "HzlIkJP2TTiIKv2h93k7Qw",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "blue",
                  "pointSize": 2,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.reads.hitile"
                },
                "width": 770,
                "height": 38,
                "position": "top"
              },
              {
                "uid": "Nza7tzj8RBCp6F4f1I20Hw",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "cc",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "bpRZDog1QQuZ7DmLfsKwXw",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 770,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "initialXDomain": [
        -41025571.69653028,
        3308767330.621793
      ],
      "initialYDomain": [
        1224557763.339768,
        1320266131.9774342
      ],
      "layout": {
        "w": 12,
        "h": 7,
        "x": 0,
        "y": 0,
        "i": "eN9c0VphSmOaptnJ6cOTdg",
        "moved": false,
        "static": false
      },
      "uid": "eN9c0VphSmOaptnJ6cOTdg"
    },
    {
      "uid": "cc",
      "initialXDomain": [
        492449995.00002545,
        690472424.9999747
      ],
      "initialYDomain": [
        1034889589.6623386,
        1037204137.545455
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoId": "b37",
        "chromInfoServer": "http://higlass.io/api/v1",
        "visible": true
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "name": "Gene Annotations (hg19)",
            "created": "2017-02-05T19:31:52.412319Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "uid": "NaYcUhtrQyeQhqz9gJOjxQ",
            "type": "horizontal-gene-annotations",
            "options": {
              "labelColor": "black",
              "labelPosition": "hidden",
              "plusStrandColor": "blue",
              "minusStrandColor": "red",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "name": "Gene Annotations (hg19)"
            },
            "width": 20,
            "height": 55,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.ballele.hitile",
            "created": "2017-08-23T00:28:24.510319Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-ballele_sim02",
            "uid": "O037fITLR5ytaM-OwFz9sQ",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "red",
              "pointSize": 2,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "grey",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.ballele.hitile"
            },
            "width": 770,
            "height": 38,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.log2_qual.hitile",
            "created": "2017-08-23T00:28:37.306697Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_qual_sim02",
            "uid": "IUkubwUBTdGfkvicGHJpzQ",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 2,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "grey",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.log2_qual.hitile"
            },
            "width": 770,
            "height": 38,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.log2_log2.hitile",
            "created": "2017-08-23T00:28:35.146995Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim02",
            "uid": "AkxtpXfXR7aZSZpIrdRwGg",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "bottomLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "green",
              "pointSize": 2,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "grey",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.log2_log2.hitile"
            },
            "width": 770,
            "height": 38,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.cnv_log2.hitile",
            "created": "2017-08-23T00:28:28.708220Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-cnv_log2_sim02",
            "uid": "JUSDVte6Saae93sUgHODMQ",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "bottomLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "turquoise",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "grey",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.cnv_log2.hitile"
            },
            "width": 770,
            "height": 38,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.reads.hitile",
            "created": "2017-08-23T00:28:39.434323Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim02",
            "uid": "HzlIkJP2TTiIKv2h93k7Qw",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "blue",
              "pointSize": 2,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "grey",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.reads.hitile"
            },
            "width": 770,
            "height": 38,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "bpRZDog1QQuZ7DmLfsKwXw",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 770,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "layout": {
        "w": 12,
        "h": 8,
        "x": 0,
        "y": 7,
        "i": "cc",
        "moved": false,
        "static": false
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
}

// Template information for Top View (track and viewport)
var Track_Top_Template = 
{
  "type": "combined",
  "uid": "WTom2np0Sq60RM4AEgeTqQ",
  "height": 38,
  "width": 770,
  "contents": [
    {
      "name": "template.hitile",
      "server": "http://servertemplate.com/api/v1",
      "tilesetUid": "template_tilesetUid",
      "uid": "uid",
      "type": "horizontal-point",
      "options": {
        "labelColor": "black",
        "labelPosition": "topLeft",
        "axisPositionHorizontal": "right",
        "pointColor": "red",
        "pointSize": 2,
        "valueScaling": "linear",
        "trackBorderWidth": 1,
        "trackBorderColor": "grey",
        "labelTextOpacity": 0.4,
        "name": "template_label"
      },
      "width": 770,
      "height": 38,
      "position": "top"
    },
    {
      "uid": "viewport_uid",
      "type": "viewport-projection-horizontal",
      "fromViewUid": "cc",
      "options": {
        "projectionFillColor": "#777",
        "projectionStrokeColor": "#777",
        "projectionFillOpacity": 0.3,
        "projectionStrokeOpacity": 0.3
      },
      "name": "Viewport Projection",
      "position": "top"
    }
  ],
  "position": "top",
  "options": {}
}

// Template information for Bottom View
var Track_Bottom_Template = 
{
  "name": "template.hitile",
  "server": "http://servertemplate.com/api/v1",
  "tilesetUid": "template_tilesetUid",
  "uid": "uid",
  "type": "horizontal-point",
  "options": {
    "labelColor": "black",
    "labelPosition": "topLeft",
    "axisPositionHorizontal": "right",
    "pointColor": "red",
    "pointSize": 2,
    "valueScaling": "linear",
    "trackBorderWidth": 1,
    "trackBorderColor": "grey",
    "labelTextOpacity": 0.4,
    "name": "template_label"
  },
  "width": 770,
  "height": 38,
  "position": "top"
}

// Create Track for TopView
function CreateTrack_TopView (Server, InputTrack, TrackColor) {
  var OutputTrack = JSON.parse(JSON.stringify(Track_Top_Template));

  // Update values for specific keys
  OutputTrack.contents[0].name = InputTrack.name;
  OutputTrack.contents[0].server = Server;
  OutputTrack.contents[0].tilesetUid = InputTrack.tilesetUid;
  OutputTrack.contents[0].options.name = InputTrack.label;
  OutputTrack.contents[0].options.pointColor = TrackColor;
  // Need to create random uid Number (for higlass view)
  // UID for combined component
  OutputTrack.uid = RandomGenerator.string(22);
  // UID for track 
  OutputTrack.contents[0].uid = RandomGenerator.string(22);
  // UID for viewport-projection
  OutputTrack.contents[1].uid = RandomGenerator.string(22);

  return OutputTrack;
}

//Create Track for BottomView
function CreateTrack_BottomView (Server, InputTrack, TrackColor) {
  var OutputTrack = JSON.parse(JSON.stringify(Track_Bottom_Template));

  // Update values for specific keys
  OutputTrack.name = InputTrack.name;
  OutputTrack.server = Server;
  OutputTrack.tilesetUid = InputTrack.tilesetUid;
  OutputTrack.options.name = InputTrack.label;
  OutputTrack.options.pointColor = TrackColor;
  // Need to create random uid Number (for higlass view)
  OutputTrack.uid = RandomGenerator.string(22);

  return OutputTrack;
}


class GenerateViewConfig {
	constructor (InputConfigFile) {
		this.inputConfigFile = InputConfigFile;
		this.HiglassViewConfig = null;

    //Temporary: create hard-coded JSON InputConfigFile
    this.inputConfigFile = TMP_InputConfigFile;

		this.CreateViewConfig = this.CreateViewConfig.bind(this);
	}

	getViewConfig() {
		return this.HiglassViewConfig;
	}

	CreateViewConfig() {
    // Assign default viewconfig with dual view 
    this.HiglassViewConfig = JSON.parse(JSON.stringify(ViewConfig_Default_Dual));

    // Step 1 - Update trackSourceServer
    this.HiglassViewConfig.trackSourceServers[1] = TMP_InputConfigFile.server;

    var Colors = ["red","orange","green","turquoise","blue"];

    // Step 2 - add individual tracks (TopView and BottomView)
    for (let TrackId in TMP_InputConfigFile.tracks) {
      let TrackColor = Colors[TrackId % Colors.length];
      // Adding Track to TopView
      let Track_Top = CreateTrack_TopView(TMP_InputConfigFile.server, TMP_InputConfigFile.tracks[TrackId], TrackColor);
      this.HiglassViewConfig.views[0].tracks.top.push(Track_Top);
      // Adding Track to BottomView
      let Track_Bottom = CreateTrack_BottomView(TMP_InputConfigFile.server, TMP_InputConfigFile.tracks[TrackId], TrackColor);
      this.HiglassViewConfig.views[1].tracks.top.push(Track_Bottom);
    }

    // Test Higlass webserver API
		// var count = axios.get('http://localhost:8989/api/v1/tilesets/').then(function (results) {
		// 	console.log('WEBSERVER API:',results.data);
		// 	return results.data;
		// });
	}
}

export default GenerateViewConfig;