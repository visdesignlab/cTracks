import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Papa from 'papaparse';
import JsonTable from 'react-json-table';

import './CNVTable.css';

// Will display table by itself using proper data as input
function DisplayTable (props) {
  return (
  	<div>
  		<p>CNV Table:</p>
  		<p>{props.table}</p>
  	</div>
 	)
}

// Retrieve CNV information 
function RetrieveTable (location) {
	console.log("Retrieve table from file...");

  var csvString = "chrom\tstart\tstop\tlog2\tqual\tploidy\texons\n\
1\t22174138\t25571909\t0.5818\t47.55\t3\t460\n\
1\t46743451\t47607963\t-1.0420\t90.82\t1\t140\n\
1\t91779506\t109358978\t0.5739\t44.73\t3\t880\n\
1\t156304475\t156785685\t-0.9756\t86.83\t1\t175\n\
1\t158637631\t159803219\t0.5772\t49.00\t3\t94\n\
1\t179314027\t182642016\t-1.0196\t89.08\t1\t282\n\
1\t202470926\t206681403\t-1.0056\t89.35\t1\t605\n\
10\t26506726\t38304994\t0.5555\t45.44\t3\t541\n\
10\t75527561\t79569516\t-1.0038\t88.85\t1\t255\n\
10\t101451090\t101496098\t0.5722\t47.34\t3\t23";

  var Papa_Config = {
    newline: "\n",
    header: true,
    dynamicTyping: true
  };

  // CSV parser
  var results = Papa.parse(csvString,Papa_Config);
  console.log("CSVInfo:",results);

/*
  var CSVFile_URL = "http://sci.utah.edu/~cvachet/Documents/BIDAC/Project_ARUP/data/test_data.tsv";
  var CSVFile_DataBase = "http://localhost:8989/api/v1/test_data.tsv";

  Papa.parse({CSVFile_URL}, {
    download: true,
    complete: function(results) {
      console.log(results);
    }
  });
*/

	// Filter data with location information
	return results.data;
}


class CNVTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Table: null,
    };

    this.UpdateTable = this.UpdateTable.bind(this);
  }

  componentDidMount() {
    this.UpdateTable();
  }

  UpdateTable() {
    var CNVData = RetrieveTable(this.props.location);
    this.setState(function () {
          return {
            Table: CNVData
          }
        });
  }

	render () {
		return (
			<div className="CNVInfo">
				<p>Chromosome range:</p>
				<ul>
					<li>Begin: {this.props.location[0]} - {this.props.location[1]}</li>
					<li>End: {this.props.location[2]} - {this.props.location[3]}</li>
				</ul>
				<div className="Table">
					{this.state.Table && <JsonTable rows = {this.state.Table} />}
				</div>
			</div>
		)
	}
}

export default CNVTable;
