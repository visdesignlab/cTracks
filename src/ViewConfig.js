// Default viewconfig - empty view with docker source server
var ViewConfig_Default =
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

// Single view
var ViewConfig_SingleView_1Sample = 
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
      "uid": "aa",
      "initialXDomain": [
        0.9999985694885254,
        3095693983.000002
      ],
      "initialYDomain": [
        2226294160.3077917,
        2238355305.6922073
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoId": "hg19",
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
            "uid": "RrIDfBq4QHiFiuhkgqbrhg",
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
            "name": "sim_01_sorted.log2_log2.hitile",
            "created": "2017-08-22T22:11:57.240116Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim01",
            "uid": "QfEEi6NSSZKss27fXQ8ByA",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "bottomLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "red",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.log2_log2.hitile"
            },
            "width": 770,
            "height": 71,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.log2_qual.hitile",
            "created": "2017-08-22T22:11:59.260231Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_qual_sim01",
            "uid": "fCYWT2b9RMquP4sFxYNVSg",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "blue",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.log2_qual.hitile"
            },
            "width": 770,
            "height": 66,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.reads.hitile",
            "created": "2017-08-22T22:12:01.208750Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim01",
            "uid": "ah0Hp70iR5mTPbfgfjprdQ",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.reads.hitile"
            },
            "width": 770,
            "height": 71,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "JhvTi-LQTaq6ERDuZkoAtg",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 680,
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
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "aa",
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

// Single view
var ViewConfig_SingleView_2Samples = 
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
      "uid": "bb",
      "initialXDomain": [
        -83707811.01894261,
        3210656258.0513477
      ],
      "initialYDomain": [
        2186300530.009819,
        2278348937.822077
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoId": "hg19",
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
            "uid": "ZYxYUtf6RauzxQJzdCoBLg",
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
            "name": "sim_01_sorted.log2_log2.hitile",
            "created": "2017-08-22T22:11:57.240116Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim01",
            "uid": "GKU4rXgFQCKBEi1YKZuvCw",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "bottomLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "red",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.log2_log2.hitile"
            },
            "width": 680,
            "height": 50,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.log2_log2.hitile",
            "created": "2017-08-23T00:28:35.146995Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim02",
            "uid": "VhkOZRTrRGezaP6DxAs2kA",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "bottomLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "red",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.log2_log2.hitile"
            },
            "width": 680,
            "height": 50,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.reads.hitile",
            "created": "2017-08-22T22:12:01.208750Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim01",
            "uid": "NTjJea9dSVa5LunHnCd2EA",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.reads.hitile"
            },
            "width": 680,
            "height": 50,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.reads.hitile",
            "created": "2017-08-23T00:28:39.434323Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim02",
            "uid": "J55GbLeGRZCnTP2ZYg0CdA",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.reads.hitile"
            },
            "width": 680,
            "height": 50,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "JGmoT5P4R4yqAwgWAOKtbw",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 680,
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
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "bb",
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


// Dual view: overview and zoom-in
var ViewConfig_DualView =
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
            "uid": "Qr-ngI7_Qi-tPEUCdSoAdQ",
            "height": 45,
            "width": 770,
            "contents": [
              {
                "name": "sim_02_sorted.ballele.hitile",
                "created": "2017-08-23T00:28:24.510319Z",
                "server": "http://localhost:8989/api/v1",
                "tilesetUid": "hitile-ballele_sim02",
                "uid": "GiXtEi17SfqOF-e5pmlQgg",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "red",
                  "pointSize": 3,
                  "valueScaling": "linear",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "labelTextOpacity": 0.4,
                  "name": "sim_02_sorted.ballele.hitile"
                },
                "width": 770,
                "height": 45,
                "position": "top"
              },
              {
                "uid": "J4YOCjzESaqfzG5rtLRnCg",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "A8AsraloQv-djomDcBgrqw",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top"
              },
              {
                "uid": "dwl1XWT-TSCUike4X7lyiA",
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
            "uid": "PK0lgXPuRReIBRRQSlS9UA",
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
        3308767330.6217923
      ],
      "initialYDomain": [
        1283287898.6401546,
        1322441322.1737454
      ],
      "layout": {
        "w": 12,
        "h": 8,
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
        1610469724.0633821,
        1946828290.1648335
      ],
      "initialYDomain": [
        1050620572.4932203,
        1048873255.2667192
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoId": "hg19",
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
            "uid": "W0JjTZidSIyW-GMWDW-yuA",
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
            "width": 770,
            "height": 55,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.log2_log2.hitile",
            "created": "2017-08-23T00:28:35.146995Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim02",
            "uid": "TJ5-EufFSryatQf2CpQW6g",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "blue",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.log2_log2.hitile"
            },
            "width": 770,
            "height": 37,
            "position": "top"
          },
          {
            "name": "sim_02_sorted.reads.hitile",
            "created": "2017-08-23T00:28:39.434323Z",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim02",
            "uid": "CG_VF8BuQp2TtmDJbj5hQg",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 1,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_02_sorted.reads.hitile"
            },
            "width": 770,
            "height": 34,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "PK0lgXPuRReIBRRQSlS9UA",
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
        "h": 12,
        "x": 0,
        "y": 8,
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
export {ViewConfig_Default, ViewConfig_SingleView_1Sample, ViewConfig_SingleView_2Samples, ViewConfig_DualView} ;
