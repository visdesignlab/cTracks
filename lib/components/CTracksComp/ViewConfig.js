// Default viewconfig - empty view with docker source server
var ViewConfig_Default = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": ["http://higlass.io/api/v1", "http://localhost:8989/api/v1"],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [{

    "tracks": {
      "top": [],
      "left": [],
      "center": [],
      "right": [],
      "bottom": []
    },
    "initialXDomain": [0, 3200000000],
    "initialYDomain": [0, 3200000000],
    "layout": {
      "w": 12,
      "h": 12,
      "x": 0,
      "y": 0,
      "moved": false,
      "static": false
    }
  }],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }

  // Single view
};var ViewConfig_SingleView_1Sample = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": ["http://higlass.io/api/v1", "http://localhost:8989/api/v1"],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [{
    "uid": "aa",
    "initialXDomain": [0.9999985694885254, 3095693983.000002],
    "initialYDomain": [2226294160.3077917, 2238355305.6922073],
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
      "top": [{
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }],
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
  }],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }

  // Single view
};var ViewConfig_SingleView_2Samples = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": ["http://higlass.io/api/v1", "http://localhost:8989/api/v1"],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [{
    "uid": "bb",
    "initialXDomain": [-83707811.01894261, 3210656258.0513477],
    "initialYDomain": [2186300530.009819, 2278348937.822077],
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
      "top": [{
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }],
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
  }],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }

  // Dual view: overview and zoom-in
};var ViewConfig_DualView_2Samples = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": ["http://higlass.io/api/v1", "http://localhost:8989/api/v1"],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [{
    "tracks": {
      "top": [{
        "type": "combined",
        "uid": "Y9RhOw8NShWr9OlId7_GiQ",
        "height": 35,
        "width": 770,
        "contents": [{
          "name": "sim_01_sorted.log2_log2.hitile",
          "created": "2017-08-22T22:11:57.240116Z",
          "server": "http://localhost:8989/api/v1",
          "tilesetUid": "hitile-log2_log2_sim01",
          "uid": "AXPyO5cqT2G98MJWL0I4Gw",
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
          "height": 27,
          "position": "top"
        }, {
          "uid": "bbO5IkrmR7qJGLGeGwce8Q",
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "LbT3T3PeRdKw-wgwx0OKig",
        "height": 34,
        "width": 770,
        "contents": [{
          "name": "sim_02_sorted.log2_log2.hitile",
          "created": "2017-08-23T00:28:35.146995Z",
          "server": "http://localhost:8989/api/v1",
          "tilesetUid": "hitile-log2_log2_sim02",
          "uid": "WGW2LAgsQ-m4zSSDd3W8jA",
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
          "width": 770,
          "height": 29,
          "position": "top"
        }, {
          "uid": "CTav4Q4gRYav5PUcasFVeg",
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "VtPB9lDpTZu2xLc1upmUTg",
        "height": 37,
        "width": 770,
        "contents": [{
          "name": "sim_01_sorted.ballele.hitile",
          "created": "2017-08-22T22:11:46.939355Z",
          "server": "http://localhost:8989/api/v1",
          "tilesetUid": "hitile-ballele_sim01",
          "uid": "Iz3P5KIMQaCxRuU2yRzvXQ",
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
            "name": "sim_01_sorted.ballele.hitile"
          },
          "width": 770,
          "height": 36,
          "position": "top"
        }, {
          "uid": "MmISlGVKTfibTBSNqBpZdQ",
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "Gr5dG4UMSx20DguXkrs_RA",
        "height": 35,
        "width": 770,
        "contents": [{
          "name": "sim_02_sorted.ballele.hitile",
          "created": "2017-08-23T00:28:24.510319Z",
          "server": "http://localhost:8989/api/v1",
          "tilesetUid": "hitile-ballele_sim02",
          "uid": "bH4aJmaLTpGN5Qrwt0YuOg",
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
            "name": "sim_02_sorted.ballele.hitile"
          },
          "width": 770,
          "height": 31,
          "position": "top"
        }, {
          "uid": "SZchJJKTRo-B3hbyfPKm4g",
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
        }],
        "position": "top",
        "options": {}
      }, {
        "name": "Chromosome Axis",
        "created": "2017-06-13T17:06:10.941309Z",
        "server": "http://higlass.io/api/v1",
        "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
        "uid": "Mc-MWAcqSQeQDhGFAWmoiw",
        "type": "horizontal-chromosome-labels",
        "options": {},
        "width": 770,
        "height": 30,
        "position": "top"
      }],
      "left": [],
      "center": [],
      "right": [],
      "bottom": []
    },
    "initialXDomain": [-41025571.69653028, 3308767330.621793],
    "initialYDomain": [1298514230.0143292, 1307214990.7995718],
    "layout": {
      "w": 12,
      "h": 9,
      "x": 0,
      "y": 0,
      "i": "eN9c0VphSmOaptnJ6cOTdg",
      "moved": false,
      "static": false
    },
    "uid": "eN9c0VphSmOaptnJ6cOTdg"
  }, {
    "uid": "cc",
    "initialXDomain": [1749681896.6272607, 2086040462.7287123],
    "initialYDomain": [1052367889.7197214, 1047125938.0402182],
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
      "top": [{
        "name": "Gene Annotations (hg19)",
        "created": "2017-02-05T19:31:52.412319Z",
        "server": "http://higlass.io/api/v1",
        "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
        "uid": "GKNBYUIKSaOYv_s5MJ2ByQ",
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
        "height": 30,
        "position": "top"
      }, {
        "name": "sim_01_sorted.reads.hitile",
        "created": "2017-08-22T22:12:01.208750Z",
        "server": "http://localhost:8989/api/v1",
        "tilesetUid": "hitile-reads_sim01",
        "uid": "ex1YeL5YTtWVeO1cG7_ORw",
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
        "height": 32,
        "position": "top"
      }, {
        "name": "sim_02_sorted.reads.hitile",
        "created": "2017-08-23T00:28:39.434323Z",
        "server": "http://localhost:8989/api/v1",
        "tilesetUid": "hitile-reads_sim02",
        "uid": "eU6M18ONTPiRWinm9IW7PQ",
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
        "height": 32,
        "position": "top"
      }, {
        "name": "Chromosome Axis",
        "created": "2017-06-13T17:06:10.941309Z",
        "server": "http://higlass.io/api/v1",
        "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
        "uid": "Ahkj-ScUQgq0ipYb0AczNg",
        "type": "horizontal-chromosome-labels",
        "options": {},
        "width": 770,
        "height": 30,
        "position": "top"
      }],
      "left": [],
      "center": [],
      "right": [],
      "bottom": []
    },
    "layout": {
      "w": 12,
      "h": 8,
      "x": 0,
      "y": 9,
      "i": "cc",
      "moved": false,
      "static": false
    }
  }],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }

  // Final view
};var ViewConfig_DualView = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": ["http://higlass.io/api/v1", "http://localhost:8989/api/v1"],
  "exportViewUrl": "http://localhost:8989/api/v1/viewconfs/",
  "views": [{
    "tracks": {
      "top": [{
        "type": "combined",
        "uid": "WTom2np0Sq60RM4AEgeTqQ",
        "height": 38,
        "width": 770,
        "contents": [{
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
        }, {
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "YSp-FsUTQFOARyGGBstKmg",
        "height": 38,
        "width": 770,
        "contents": [{
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
        }, {
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "A0-maEOsQqil1LNpeMop5Q",
        "height": 38,
        "width": 770,
        "contents": [{
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
        }, {
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "DMVnWRH4RWWP9Oh25oE53A",
        "height": 38,
        "width": 770,
        "contents": [{
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
        }, {
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
        }],
        "position": "top",
        "options": {}
      }, {
        "type": "combined",
        "uid": "S81mNFKwQWus-LI5tEj6Aw",
        "height": 38,
        "width": 770,
        "contents": [{
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
        }, {
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
        }],
        "position": "top",
        "options": {}
      }, {
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
      }],
      "left": [],
      "center": [],
      "right": [],
      "bottom": []
    },
    "initialXDomain": [-41025571.69653028, 3308767330.621793],
    "initialYDomain": [1224557763.339768, 1320266131.9774342],
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
  }, {
    "uid": "cc",
    "initialXDomain": [492449995.00002545, 690472424.9999747],
    "initialYDomain": [1034889589.6623386, 1037204137.545455],
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
      "top": [{
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }],
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
  }],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
};

export { ViewConfig_Default, ViewConfig_SingleView_1Sample, ViewConfig_SingleView_2Samples, ViewConfig_DualView, ViewConfig_DualView_2Samples };