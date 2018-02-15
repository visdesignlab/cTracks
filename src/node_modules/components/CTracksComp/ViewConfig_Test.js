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

// ViewConfig used in Higlass - dev.html
// Note: viewUID located on top of the file
var ViewConfig_Public_Dev = 
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

// Simplified version of ViewConfig used in Higlass - dev.html
// Note: viewUID located on top of the file
var ViewConfig_Public_Dev_Simple = 
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
            "height": 150,
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

// ViewConf created from CNVApp user interface - using public data
var ViewConfig_Auto_PublicData =
{
}

// ViewConf created from CNVApp user interface - using local data
var ViewConfig_Auto_LocalData =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://higlass.io/api/v1",
    "http://127.0.0.1:8989/api/v1"
  ],
  "exportViewUrl": "http://127.0.0.1:8989/api/v1/viewconfs/",
  "views": [
    {
      "tracks": {
        "top": [
          {
            "name": "sim_02_sorted.ballele.hitile",
            "server": "http://127.0.0.1:8989/api/v1",
            "tilesetUid": "hitile-ballele_sim02",
            "uid": "LN3OARV4R7-UjgCMreaY4A",
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
              "name": "sim_02_sorted.ballele.hitile"
            },
            "width": 680,
            "height": 80,
            "position": "top"
          },
          {
            "name": "Chromosome Axis",
            "created": "2017-06-13T17:06:10.941309Z",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "Ajn_ttUUQbqgtOD4nOt-IA",
            "uid": "AFBslSm2Sa2E6MVosS8biA",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 680,
            "height": 74,
            "position": "top"
          }
        ],
        "left": [],
        "center": [],
        "right": [],
        "bottom": []
      },
      "initialXDomain": [
        -3.725290298461914e-9,
        3199999999.9999995
      ],
      "initialYDomain": [
        1378823529.4117646,
        1821176470.5882354
      ],
      "layout": {
        "w": 12,
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "IT1ZAP_ISQSrsrf2RzIBxA",
        "moved": false,
        "static": false
      },
      "uid": "IT1ZAP_ISQSrsrf2RzIBxA",
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
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

// Artificial / Manually created viewconf, using Public_Dev as a template and my simulation data
var ViewConfig_Artificial_LocalData =
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
            "name": "sim_01_sorted.ballele.hitile",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-ballele_sim01",
            "uid": "H94GxWXJSjKxauWcwAihDg",
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
            "width": 20,
            "height": 60,
            "position": "top"
          },
          {
            "name": "sim_01_sorted.reads.hitile",
            "server": "http://localhost:8989/api/v1",
            "tilesetUid": "hitile-reads_sim01",
            "uid": "G0g0oYqDTbicUgvDI_dqLg",
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
              "name": "sim_01_sorted.reads.hitile"
            },
            "width": 851,
            "height": 71,
            "position": "top"
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

export {ViewConfig_Default, ViewConfig_Public_Dev, ViewConfig_Public_Dev_Simple, ViewConfig_Auto_LocalData, ViewConfig_Artificial_LocalData} ;



