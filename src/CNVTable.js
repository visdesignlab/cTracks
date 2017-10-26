import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Papa from 'papaparse';
import JsonTable from 'react-json-table';

import './CNVTable.css';


// WARNING: OLD function - parse CNV/CSV information 
/*function RetrieveTable (location) {
	console.log("Retrieving table from file...");


 // Retrieve information from csvString
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



  // Retrieve information from url
  // var CSVFile_URL = "http://sci.utah.edu/~cvachet/Documents/BIDAC/Project_ARUP/data/test_data.tsv";
  // var CSVFile_DataBase = "http://localhost:8989/api/v1/tiles/?d=test_data";
  // var CSVFile_DataBase2 = "http://localhost:8000/test_data.tsv";
  // var CSVFile_DataBase3 = "http://scis-macbook-pro.local:3000/src/data/test_data.tsv";
  // var CSVFile_DataBase4 = "/data/test_data.tsv";

  // Papa.parse(CSVFile_DataBase3, {
  //   download: true,
  //   error: function(error) {
  //     console.log("ERROR Parse:",error);
  //   },
  //   complete: function(results) {
  //     console.log("CSVInfo_DataBase:",results);
  //   }
  // });


	// Filter data with location information
	return results.data;
}
*/

// Filter CVN data using location information (from ViewConfig) 
function FilterInfo(location,data) {
    console.log("Filtering CNV information...");

    var Keys = Object.keys(data[0]);

    var output = [];
    var searchField1 = Keys[0]; // "chrom"
    var searchField2 = Keys[1]; // "start"
    var searchField3 = Keys[2]; // "stop"
    var searchVal1 = location[0].replace('chr','');
    var searchVal2 = location[1];
    var searchVal3 = location[2].replace('chr','');
    var searchVal4 = location[3];

    
    // Multiple rounds for search: 
    var Index_Lower = 0;
    var Index_Upper = data.length;
      // Step 1: find lower index 
    for (let i = 0 ; i < data.length ; i++)
    {
        if (data[i][searchField1] < searchVal1) {
          continue;
        } else if ((data[i][searchField1] > searchVal1) | ((data[i][searchField1] == searchVal1) & (data[i][searchField2] >= searchVal2)))
        {
          Index_Lower = i;
          break;
        }
    }

      // Step 2: find upper index 
    for (let i = Index_Lower; i < data.length ; i++)
    {
        if (data[i][searchField1] < searchVal3) {
          continue;
        } if ((data[i][searchField1] > searchVal3) | ((data[i][searchField1] == searchVal3) & (data[i][searchField3] > searchVal4)))
        {
          //console.log("In Upper loop...");
          Index_Upper = i;
          break;
        }
    }

    //console.log("Data_Index_Lower:", Index_Lower);
    //console.log("Data_Index_Upper:", Index_Upper);

    // Step3: return filtered table
    for (let i = Index_Lower; i < Index_Upper; i++)
    {
      output.push(data[i]);
    }
    return output;
}

class CNVTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Table: null,
    };

    //this.UpdateTable = this.UpdateTable.bind(this);
  }

  componentDidMount() {
    this.FilterCNVInfo();
  }

  // Compare incoming Props with current props: new filtering and update when needed
  componentWillReceiveProps(nextProps) {
    console.log("In componentWillReceiveProps");
    var ThisLocationString = this.props.location.toString();
    var NextLocationString = nextProps.location.toString();
    var ThisCNVDataLength = this.props.CNVData.length;
    var NextCNVDataLength = nextProps.CNVData.length;
    //console.log('ThisCNVDataLength', ThisCNVDataLength);
    //console.log('NextCNVDataLength', NextCNVDataLength);
    if ((ThisLocationString !== NextLocationString) | (ThisCNVDataLength !== NextCNVDataLength)) {
      this.FilterCNVInfo2(nextProps);
    }
  }

  // Filter data and update table 
  FilterCNVInfo() {
    // Old function to retrieve info from csvString
    //var CNVData = RetrieveTable(this.props.location);
    var TableInfo = FilterInfo(this.props.location,this.props.CNVData);
    //console.log('TableInfo (post-filtering)',TableInfo);
    this.UpdateTable(TableInfo);
  }

  // Filter data based on incoming props, and update table
  FilterCNVInfo2(nextProps) {
    var TableInfo = FilterInfo(nextProps.location,nextProps.CNVData);
    //console.log('TableInfo (post-filtering)',TableInfo);
    this.UpdateTable(TableInfo);
  }

  // Update state of Table
  UpdateTable (TableInfo) {
    this.setState(function () {
      return {
        Table: TableInfo
      }
    });
  }

	render () {
		return (
      <div className="CNVTable">
  			{this.state.Table && <JsonTable rows = {this.state.Table} />}
      </div>
		)
	}
}

CNVTable.propTypes = {
  CNVData: PropTypes.array.isRequired,
  location: PropTypes.array.isRequired
}


export default CNVTable;
