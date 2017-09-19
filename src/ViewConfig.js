var ViewConfig_Default =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
  "http://127.0.0.1:8989/api/v1",
  "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "/api/v1/viewconfs/",
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

var ViewConfig_Public =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "/api/v1",
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "name": "Gene Annotations (hg19)",
            "created": "2017-02-05T19:31:52.412319Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "uid": "av5d35AjQYyuRuLzAHzB2w",
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
            "name": "wgEncodeSydhTfbsGm12878InputStdSig",
            "created": "2017-02-03T17:48:00.630172Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Nn8aA4qbTnmaa-oGGbuE-A",
            "uid": "Zw7atG82R4S1NwqkLMUcRA",
            "type": "horizontal-line",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "lineStrokeColor": "blue",
              "lineStrokeWidth": 1,
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "wgEncodeSydhTfbsGm12878InputStdSig"
            },
            "width": 900,
            "height": 78,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "HmKPMhO2TC6y3NOwPmL-2Q",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 900,
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
        -805741253.5759188,
        4146466725.7597203
      ],
      "initialYDomain": [
        1018619932.3006318,
        3021512937.2763786
      ],
      "layout": {
        "w": 12,
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "D5ICtUcFSEeKy_u9iVi5fw",
        "moved": false,
        "static": false
      },
      "uid": "D5ICtUcFSEeKy_u9iVi5fw",
      "genomePositionSearchBoxVisible": true,
      "genomePositionSearchBox": {
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoServer": "http://higlass.io/api/v1",
        "visible": true,
        "chromInfoId": "hg19",
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA"
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

var ViewConfig_Public_Dev = 
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://higlass.io/api/v1",
    "http://localhost:8989/api/v1"
  ],
  "exportViewUrl": "http://localhost:8000/api/v1/viewconfs/",
  "views": [
    {
      "uid": "aa",
            "initialXDomain": [
                1000000000,3000000000
                                          ],
            "initialYDomain": [
                1000000000,3000000000
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
            "uuid": "OHJakQICQD6gTD7skx4EWA",
            "filetype": "beddb",
            "datatype": "gene-annotation",
            "private": false,
            "name": "Gene Annotations (hg19)",
            "coordSystem": "hg19",
            "coordSystem2": "",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "serverUidKey": "http://higlass.io/api/v1/OHJakQICQD6gTD7skx4EWA",
            "uid": "BEEMEjU7QCa2krDO9C0yOQ",
            "type": "horizontal-gene-annotations",
            "options": {
                "labelPosition": "outerTop",
              "name": "Gene Annotations (hg19)"
            },
            "width": 20,
            "height": 60,
            "maxWidth": 4294967296,
            "maxZoom": 22
          },
         {
            "filetype": "hitile",
            "datatype": "vector",
            "private": false,
            "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
            "coordSystem": "hg19",
            "coordSystem2": "",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "F2vbUeqhS86XkxuO1j2rPA",
            "serverUidKey": "http://higlass.io/api/v1/F2vbUeqhS86XkxuO1j2rPA",
            "type": "horizontal-line",
            "options": {
              "labelColor": "red",
              "labelPosition": "outerLeft",
              "axisPositionHorizontal": "right",
              "lineStrokeColor": "blue",
              "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
              "valueScaling": "log"
            },
            "width": 20,
            "height": 20,
            "maxWidth": 4294967296,
            "maxZoom": 22
          },
          {
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
            "type": "horizontal-chromosome-labels",
            "position": "top",
            "name": "Chromosome Labels (hg19)",
            "height": 30,
            "uid": "I1QUF22JQJuJ38j9PS4iqw",
            "options": {}
          }
        ],
        "left": [
         {
            "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "F2vbUeqhS86XkxuO1j2rPA",
            "type": "vertical-line",
            "options": {
              "labelColor": "red",
              "labelPosition": "outerLeft",
              "axisPositionHorizontal": "right",
              "lineStrokeColor": "blue",
              "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
              "valueScaling": "log"
            }
          },
          {
            "type": "vertical-gene-annotations",
            "width": 60,
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "server": "http://higlass.io/api/v1",
            "position": "left",
            "name": "Gene Annotations (hg19)",
            "options": {
              "labelPosition": "bottomRight",
              "name": "Gene Annotations (hg19)"
            },
            "uid": "OgnAEKSHRaG-gR1RqPOuBQ",
            "maxWidth": 4294967296,
            "maxZoom": 22
          },
          {
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
            "type": "vertical-chromosome-labels",
            "position": "left",
            "name": "Chromosome Labels (hg19)",
            "width": 30,
            "uid": "a-mFiHnBQ8uuI6UG3USWVA",
            "options": {}
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 200,
            "contents": [
              {
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "CQMd6V_cRw6iCI_-Unl3PQ",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "colorRange": [
                    "#FFFFFF",
                    "#F8E71C",
                    "#F5A623",
                    "#D0021B"
                  ],
                  "colorbarPosition": "topRight",
                  "colorbarLabelsPosition": "outside",
                  "maxZoom": null,
                  "labelPosition": "bottomLeft",
                  "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb"
                },
                "uid": "heatmap1",
                "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                "maxWidth": 4194304000,
                "binsPerDimension": 256,
                "maxZoom": 14
              },
              {
                "type": "2d-chromosome-grid",
                "datatype": [
                  "chromosome-2d-grid"
                ],
                "local": true,
                "orientation": "2d",
                "name": "Chromosome Grid (hg19)",
                "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
                "thumbnail": null,
                "uuid": "TIlwFtqxTX-ndtM7Y9k1bw",
                "server": "",
                "tilesetUid": "TIlwFtqxTX-ndtM7Y9k1bw",
                "serverUidKey": "/TIlwFtqxTX-ndtM7Y9k1bw",
                "uid": "LUVqXXu2QYiO8XURIwyUyA",
                "options": {}
              }

            ],
            "position": "center",
            "options": {}
          }
        ],
        "right": [
          {
            "type": "vertical-gene-annotations",
            "width": 60,
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "server": "http://higlass.io/api/v1",
            "name": "Gene Annotations (hg19)",
            "options": {
              "labelPosition": "outerBottom",
              "name": "Gene Annotations (hg19)"
            },
            "maxWidth": 4294967296,
            "maxZoom": 22
          },
          {
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
            "type": "vertical-chromosome-labels",
            "name": "Chromosome Labels (hg19)",
            "width": 30,
            "options": {
                "labelPosition": "outerBottom",
                "name": "Chromosome labels"
            }
          }
        ],
        "bottom": [
         {
            "filetype": "hitile",
            "datatype": "vector",
            "private": false,
            "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
            "coordSystem": "hg19",
            "coordSystem2": "",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "F2vbUeqhS86XkxuO1j2rPA",
            "serverUidKey": "http://higlass.io/api/v1/F2vbUeqhS86XkxuO1j2rPA",
            "type": "horizontal-line",
            "options": {
              "labelPosition": "outerLeft",
              "axisPositionHorizontal": "right",
              "lineStrokeColor": "blue",
              "name": "wgEncodeSydhTfbsGm12878Rad21IggrabSig.hitile",
              "valueScaling": "log"
            },
            "width": 20,
            "height": 50,
            "maxWidth": 4294967296,
            "maxZoom": 22
          },
        ]
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

var ViewConfig_Local =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://127.0.0.1:8989/api/v1",
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "type": "combined",
            "uid": "JOAJYdrmSD2v0RYw3sTzcA",
            "height": 62,
            "width": 885,
            "contents": [
              {
                "name": "sim_01_sorted.cnv_log2.hitile",
                "server": "http://127.0.0.1:8989/api/v1",
                "tilesetUid": "hitile-cnv_log2_sim01",
                "uid": "NjVCtxFbQ2eEpisDEHMu_g",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "red",
                  "pointSize": 3,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_01_sorted.cnv_log2.hitile"
                },
                "width": 885,
                "height": 62,
                "position": "top"
              },
              {
                "uid": "NVPzQY4_QjKCUleSzZ0MsA",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "EKmqwYiYT22XY3mvnpDtwQ",
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
            "position": "top"
          },
          {
            "type": "combined",
            "uid": "EAvMTgy6R_CmOM_OLN7R2A",
            "height": 78,
            "width": 885,
            "contents": [
              {
                "name": "sim_01_sorted.ballele.hitile",
                "server": "http://127.0.0.1:8989/api/v1",
                "tilesetUid": "hitile-ballele_sim01",
                "uid": "GJs6RYrKSjmqv0cjGQ0UAA",
                "type": "horizontal-point",
                "options": {
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "axisPositionHorizontal": "right",
                  "pointColor": "green",
                  "pointSize": 3,
                  "valueScaling": "linear",
                  "trackBorderWidth": 1,
                  "trackBorderColor": "grey",
                  "labelTextOpacity": 0.4,
                  "name": "sim_01_sorted.ballele.hitile"
                },
                "width": 885,
                "height": 78,
                "position": "top"
              },
              {
                "uid": "KnBH0RH1R9OWs2lV8gvJFA",
                "type": "viewport-projection-horizontal",
                "fromViewUid": "EKmqwYiYT22XY3mvnpDtwQ",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.3
                },
                "name": "Viewport Projection",
                "position": "top",
                "width": 885,
                "height": 78
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
            "uid": "GkTmzVOETQmACFQW5pTahA",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 885,
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
        52692290.18362872,
        3226185828.5461082
      ],
      "initialYDomain": [
        1677894101.3677955,
        1785470153.5156763
      ],
      "layout": {
        "w": 12,
        "h": 9,
        "x": 0,
        "y": 0,
        "i": "VHKq6JzcSxSq_Rhl2ScJkQ",
        "moved": false,
        "static": false
      },
      "uid": "VHKq6JzcSxSq_Rhl2ScJkQ"
    },
    {
      "tracks": {
        "top": [
          {
            "name": "Gene Annotations (hg19)",
            "created": "2017-02-05T19:31:52.412319Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "OHJakQICQD6gTD7skx4EWA",
            "uid": "CqxK0FA_Sl-yGSZDzDw6uA",
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
            "server": "http://127.0.0.1:8989/api/v1",
            "tilesetUid": "hitile-log2_log2_sim01",
            "uid": "JAFG-HD2TwmJH1b8E4B_AQ",
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
              "name": "sim_01_sorted.log2_log2.hitile"
            },
            "width": 885,
            "height": 75,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.log2_qual.hitile",
            "server": "http://127.0.0.1:8989/api/v1",
            "tilesetUid": "hitile-log2_qual_sim01",
            "uid": "ZdNONdfFTqaSX7wETDZcBw",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "blue",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.log2_qual.hitile"
            },
            "width": 885,
            "height": 62,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.reads.hitile",
            "server": "http://127.0.0.1:8989/api/v1",
            "tilesetUid": "hitile-reads_sim01",
            "uid": "RaZr9M1NSq-KEwQuMmoyhg",
            "type": "horizontal-point",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "pointColor": "orange",
              "pointSize": 3,
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.reads.hitile"
            },
            "width": 885,
            "height": 57,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "GkTmzVOETQmACFQW5pTahA",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 885,
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
        1263784907.1869774,
        1843763640.338649
      ],
      "initialYDomain": [
        1174530292.9045799,
        1175840979.3071826
      ],
      "layout": {
        "w": 12,
        "h": 12,
        "x": 0,
        "y": 9,
        "i": "EKmqwYiYT22XY3mvnpDtwQ",
        "moved": false,
        "static": false
      },
      "uid": "EKmqwYiYT22XY3mvnpDtwQ"
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

var ViewConfig_LocalSimple =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://127.0.0.1:8989/api/v1",
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "http://127.0.0.1:8989/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "name": "sim_01_sorted.ballele.hitile",
            "server": "http://127.0.0.1:8989/api/v1",
            "tilesetUid": "hitile-ballele_sim01",
            "uid": "MxoQagkwT92QnQmyJ2aVCw",
            "type": "horizontal-line",
            "options": {
              "labelColor": "black",
              "labelPosition": "topLeft",
              "axisPositionHorizontal": "right",
              "lineStrokeColor": "blue",
              "lineStrokeWidth": 1,
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "name": "sim_01_sorted.ballele.hitile"
            },
            "width": 876,
            "height": 53,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "c5-aRUD0Rtyq1aVwTUfb7g",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 876,
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
        0,
        3199999999.9999995
      ],
      "initialYDomain": [
        800000000,
        2399999999.9999995
      ],
      "layout": {
        "w": 12,
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "XqIXoXMERVmMDI6754DmYg",
        "moved": false,
        "static": false
      },
      "uid": "XqIXoXMERVmMDI6754DmYg"
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

export {ViewConfig_Default, ViewConfig_Public, ViewConfig_Public_Dev, ViewConfig_Local, ViewConfig_LocalSimple} ;



