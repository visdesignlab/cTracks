import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Papa from 'papaparse';
import JsonTable from './rjt.js';

// New table
import ReactTable from 'react-table';
import checkboxHOC from './checkboxHOC';
import 'react-table/react-table.css';


import './CNVTable.css';


// WARNING: OLD function - parse CNV/CSV information 
/*function RetrieveTable (location) {


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



  // Retrieve information from url
  // var CSVFile_URL = "http://sci.utah.edu/~cvachet/Documents/BIDAC/Project_ARUP/data/test_data.tsv";
  // var CSVFile_DataBase = "http://localhost:8989/api/v1/tiles/?d=test_data";
  // var CSVFile_DataBase2 = "http://localhost:8000/test_data.tsv";
  // var CSVFile_DataBase3 = "http://scis-macbook-pro.local:3000/src/data/test_data.tsv";
  // var CSVFile_DataBase4 = "/data/test_data.tsv";

  // Papa.parse(CSVFile_DataBase3, {
  //   download: true,
  //   error: function(error) {
  //   },
  //   complete: function(results) {
  //   }
  // });


	// Filter data with location information
	return results.data;
}
*/

// Filter CVN data using location information (from ViewConfig) 
function FilterInfo(location,data) {
    var Keys = Object.keys(data[0]);

    var output = [];
    var searchField1 = Keys[0]; // "chrom"
    var searchField2 = Keys[1]; // "start"
    var searchField3 = Keys[2]; // "stop"
    var searchVal1 = location[0].replace('chr','');
    if (!isNaN(searchVal1)) {
      searchVal1 = parseInt(searchVal1,10);
    }
    var searchVal2 = location[1];
    var searchVal3 = location[2].replace('chr','');
    if (!isNaN(searchVal3)) {
      searchVal3 = parseInt(searchVal3,10);
    }
    var searchVal4 = location[3];


    // Multiple rounds for search: 
    var Index_Lower = 0;
    var Index_Upper = data.length;
      // Step 1: find lower index 
    for (let i = 0 ; i < data.length ; i++)
    {
        if (data[i][searchField1] < searchVal1) {
          continue;
        } else if ((data[i][searchField1] > searchVal1) | ((data[i][searchField1] === searchVal1) & (data[i][searchField2] >= searchVal2)))
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
        } if ((data[i][searchField1] > searchVal3) | ((data[i][searchField1] === searchVal3) & (data[i][searchField3] > searchVal4)))
        {
          Index_Upper = i;
          break;
        }
    }

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
    this.Columns = null;

    //this.UpdateTable = this.UpdateTable.bind(this);
  }

  componentDidMount() {
    //this.FilterCNVInfo();
    this.CreateCNVData();
  }

  // Compare incoming Props with current props: new filtering and update when needed
  componentWillReceiveProps(nextProps) {
    // var ThisLocationString = this.props.location.toString();
    // var NextLocationString = nextProps.location.toString();
    // var ThisCNVDataLength = this.props.CNVData.length;
    // var NextCNVDataLength = nextProps.CNVData.length;
    // if ((ThisLocationString !== NextLocationString) | (ThisCNVDataLength !== NextCNVDataLength)) {
    //   this.FilterCNVInfo2(nextProps);
    // }
  }

  CreateCNVData () {
    this.UpdateTable(this.props.CNVData);
    var ColumnTable = Object.keys(this.props.CNVData);
    this.Columns = [
      {
        Header: "Chromosome",
        columns: [
          {
            Header: "Number",
            accessor: "#chrom"
          },
          {
            Header: "Start",
            accessor: "start"
          },
          {
            Header: "End",
            accessor: "stop"
          }
        ]
      },
      {
        Header: "Measurements",
        columns: [
          {
            Header: "log2",
            accessor: "log2"
          },
          {
            Header: "Quality",
            accessor: "qual"
          },
          {
            Header: "Ploidy",
            accessor: "ploidy"
          },
          {
            Header: "Exons",
            accessor: "exons"
          }
        ]
      }
    ];
  }


  // Filter data and update table 
  FilterCNVInfo() {
    // Old function to retrieve info from csvString
    //var CNVData = RetrieveTable(this.props.location);
    var TableInfo = FilterInfo(this.props.location,this.props.CNVData);
    this.UpdateTable(TableInfo);
  }

  // Filter data based on incoming props, and update table
  FilterCNVInfo2(nextProps) {
    var TableInfo = FilterInfo(nextProps.location,nextProps.CNVData);
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
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }];
    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }];
		return (
      <div>
        <div className="CNVTable">
          {this.state.Table && 
          <JsonTable 
            rows = {this.state.Table} 
            onRowEnter = { (e,item) => this.props.onRowEnter(item) }
            onRowLeave = { (e,item) => this.props.onRowLeave(item) }
          />
          }
        </div>
        <div>
          {this.state.Table && 
          <ReactTable
            data = {this.state.Table}
            columns = {this.Columns}
            defaultPageSize={50}
            className="-striped -highlight"
          />
          }
        </div>
      </div>
		)
	}
}

      // <div>
      //   {data &&
      //     <ReactTable
      //       data = {data}
      //     />
      //   }
      // <div>

CNVTable.propTypes = {
  CNVData: PropTypes.array.isRequired,
  location: PropTypes.array.isRequired
}


export default CNVTable;
