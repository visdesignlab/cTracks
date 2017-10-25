import axios from 'axios';

// Default viewconfig - empty view with docker source server
var ViewConfig_Default_Single =
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
        "top": [],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "initialXDomain": [ 0, 3200000000 ],
      "initialYDomain": [ 0, 3200000000 ],
      "layout": {
        "w": 12,
        "h": 12,
        "x": 0,
        "y": 0,
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

// Track information for Top View (using sim_02 data)
var Track_Top = 
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
}

// Track information for Bottom View (using sim_02 data)
var Track_Bottom = 
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
}


class GenerateViewConfig {
	constructor (InputConfigFile) {
		this.inputConfigFile = InputConfigFile;
		this.HiglassViewConfig = null;

		this.CreateViewConfig = this.CreateViewConfig.bind(this);
	}

	CreateDefaultViewConfig() {
		this.HiglassViewConfig = ViewConfig_Default_Dual;
	}

	getViewConfig() {
		return this.HiglassViewConfig;
	}

	CreateViewConfig() {
//		this.HiglassViewConfig = ViewConfig_DualView_Init;
//		var XDomain = this.HiglassViewConfig.views[0].initialXDomain;
//		console.log("XDomain2:",this.HiglassViewConfig.views[0].initialXDomain);
		console.log('HiglassViewConfig_IN', this.HiglassViewConfig);
		this.HiglassViewConfig.views[0].tracks.top[1] = Track_Top;
		this.HiglassViewConfig.views[1].tracks.top[1] = Track_Bottom;
		console.log('HiglassViewConfig_NEW', this.HiglassViewConfig);

    // Test Higlass webserver API
		var count = axios.get('http://localhost:8989/api/v1/tilesets/').then(function (results) {
			console.log('WEBSERVER API:',results.data);
			return results.data;
		});
	}
}

export default GenerateViewConfig;
