var testViewConfig =
{
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "/api/v1/viewconfs",
  "views": [
    {
      "uid": "aa",
      "initialXDomain": [
        2621885694.222664,
        2720987555.5230107
      ],
      "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteServer": "http://higlass.io/api/v1",
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "chromInfoServer": "http://higlass.io/api/v1",
        "chromInfoId": "hg19",
        "visible": true
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
            {
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "CQMd6V_cRw6iCI_-Unl3PQ",
                "type": "horizontal-heatmap",
                "position": "top",
                "options": {
                  "maxZoom": null,
                  "labelPosition": "bottomRight",
                  "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "colorbarLabelsPosition": "inside",
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "scaleStartPercent": 0,
                  "scaleEndPercent": 1
                },
                "uid": "GjuZed1ySGW1IzZZqFB9BA",
                "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "width": 1293,
                "height": 453
            },
          {
            "name": "laminB1.hitile",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "UMrSq3TYR0yQKNOewIVemg",
            "uid": "OeiJWNhJRoG-BuUcAAmRhA",
            "type": "horizontal-bar",
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
              "name": "laminB1.hitile",
              "barFillColor": "darkgreen",
              "barOpacity": 1
            },
            "width": 1293,
            "height": 20,
            "position": "top"
          }
        ],
        "left": [
          {
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
            "type": "vertical-chromosome-labels",
            "position": "left",
            "name": "Chromosome Labels (hg19)",
            "width": 30,
            "uid": "RHdQK4IRQ7yJeDmKWb7Pcg",
            "options": {},
            "height": 453
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 453,
            "contents": [
              {
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "CQMd6V_cRw6iCI_-Unl3PQ",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "maxZoom": null,
                  "labelPosition": "bottomRight",
                  "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "colorbarLabelsPosition": "inside",
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "scaleStartPercent": 0,
                  "scaleEndPercent": 1
                },
                "uid": "GjuZed1ySGW1IzZZqFB9BA",
                "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "width": 1293,
                "height": 453
              }
            ],
            "position": "center",
            "options": {},
            "width": 1293
          }
        ],
        "right": [],
        "bottom": []
      },
      "layout": {
        "w": 6,
        "h": 12,
        "x": 0,
        "y": 0,
        "i": "aa",
        "moved": false,
        "static": false
      },
      "initialYDomain": [
        2537279620.3907404,
        2738652297.858597
      ]
    },
    {
      "uid": "BMabxRZtSWK7scUhsH28pg",
      "initialXDomain": [
        2558370928.092823,
        2770978990.9988
      ],
      "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteServer": "http://higlass.io/api/v1",
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
        "chromInfoServer": "http://higlass.io/api/v1",
        "chromInfoId": "hg19",
        "visible": true
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "name": "laminB1.hitile",
            "server": "http://higlass.io/api/v1",
            "tilesetUid": "UMrSq3TYR0yQKNOewIVemg",
            "uid": "OeiJWNhJRoG-BuUcAAmRhA",
            "type": "horizontal-bar",
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
              "name": "laminB1.hitile",
              "barFillColor": "darkgreen",
              "barOpacity": 1
            },
            "width": 1293,
            "height": 20,
            "position": "top"
          }
        ],
        "left": [
          {
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
            "type": "vertical-chromosome-labels",
            "position": "left",
            "name": "Chromosome Labels (hg19)",
            "width": 30,
            "uid": "RHdQK4IRQ7yJeDmKWb7Pcg",
            "options": {},
            "height": 453
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 453,
            "contents": [
              {
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "CQMd6V_cRw6iCI_-Unl3PQ",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "maxZoom": null,
                  "labelPosition": "bottomRight",
                  "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "colorbarLabelsPosition": "inside",
                  "colorbarPosition": "topLeft",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "scaleStartPercent": 0,
                  "scaleEndPercent": 1
                },
                "uid": "GjuZed1ySGW1IzZZqFB9BA",
                "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "width": 1293,
                "height": 453
              }
            ],
            "position": "center",
            "options": {},
            "width": 1293
          }
        ],
        "right": [],
        "bottom": []
      },
      "layout": {
        "w": 6,
        "h": 12,
        "x": 6,
        "y": 0,
        "i": "BMabxRZtSWK7scUhsH28pg",
        "moved": false,
        "static": false
      },
      "initialYDomain": [
        2389295960.295099,
        2821310599.7464886
      ]
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

export {testViewConfig};
