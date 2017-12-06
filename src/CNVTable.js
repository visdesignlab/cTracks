import React, { Component } from 'react';
import PropTypes from 'prop-types';

import JsonTable from './rjt.js';

// New table
import ReactTable from 'react-table';
import checkboxHOC from './checkboxHOC';

import 'react-table/react-table.css';
import './CNVTable.css';

// include Higher Order Component (HOC) to React Table
const CheckboxTable = checkboxHOC(ReactTable);


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

// generate data with ID information
function GenerateTableData(inputData)
{
  var Keys = Object.keys(inputData[0]);
  const data = inputData.map((item)=>{
    const _id = 'chr' + item[Keys[0]] + '-' + item[Keys[1]];
    return {
      _id,
      ...item,
    }
  })
  //console.log("TableData - 1st row",data[0]);
  return data;
}

// generate automated column information for Table
function GenerateColumns(data)
{
  const columns = [];
  const sample = data[0];
  Object.keys(sample).forEach((key)=>{
    if(key!=='_id') 
    {
      columns.push({
        accessor: key,
        Header: key,
      })
    }
  })
  return columns;
}

class CNVTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      TableData: null,
      TableColumns: null,
      selection: [],
    };
  }

  componentDidMount() {
    //this.FilterCNVInfo();
    this.CreateTableInfo();
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



  // Filter data and update table 
  FilterCNVInfo() {
    // Old function to retrieve info from csvString
    //var CNVData = RetrieveTable(this.props.location);
    var TableInfo = FilterInfo(this.props.location,this.props.CNVData);
    this.UpdateTableData(TableInfo);
  }

  // Filter data based on incoming props, and update table
  FilterCNVInfo2(nextProps) {
    var TableInfo = FilterInfo(nextProps.location,nextProps.CNVData);
    this.UpdateTable(TableInfo);
  }

  // Update state of TableData
  UpdateTableData (data) {
    this.setState(function () {
      return {
        TableData: data
      }
    });
  }

  // Update state of TableData
  UpdateTableColumns (columns) {
    this.setState(function () {
      return {
        TableColumns: columns
      }
    });
  }


  CreateTableInfo () {
    // Create Table data including uid
    var Data = GenerateTableData(this.props.CNVData);
    this.UpdateTableData(Data);
    // Create column information
    var Columns = GenerateColumns(Data);
    this.UpdateTableColumns(Columns);
  }
  
  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [
      ...this.state.selection
    ];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ]
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  }

  isSelected = (key) => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  }

  logSelection = () => {
    console.log('selection:', this.state.selection);
  }

	render () {
    const { toggleSelection, isSelected, logSelection } = this;
    const { TableData, TableColumns, selectAll, } = this.state;

    const checkboxProps = {
      isSelected,
      toggleSelection
    };

		return (
      <div>

        <div>
          <button onClick={logSelection}>Log Selection</button>
        </div>
        <div>
          {TableData && 
        <CheckboxTable
          ref={(r)=>this.checkboxTable=r}
          data={TableData}
          columns={TableColumns}
          defaultPageSize={100}
          style={{
            height: "400px"
          }}
          className="-striped -highlight"
          {...checkboxProps}
        />
          }
        </div>
      </div>
		)
	}
}

CNVTable.propTypes = {
  CNVData: PropTypes.array.isRequired,
  location: PropTypes.array.isRequired
}


export default CNVTable;
