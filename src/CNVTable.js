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


// OPTIONAL: New TrComponent to potentially handle Hover in the future...
// class MyTrComponent extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       background: null
//     }
//   }
//   render () {
//     const {children, className, style, ...rest} = this.props
//     //console.log(rest)
//     return (
//       <div
//         className={'rt-tr ' + className}
//         style={{
//           ...style,
//           ...this.state
//         }}
//         {...rest}
//         onMouseEnter={() => this.setState({
//           background: 'yellow'
//         })}
//         onMouseLeave={() => this.setState({
//           background: null
//         })}
//       >
//         {children}
//       </div>
//     )
//   }
// }


// Filter CVN data using location information (from ViewConfig) 
function FilterInfo(location,data) {
    var Keys = Object.keys(data[0]);

    var output = [];
    var searchField1 = Keys[1]; // "chrom"
    var searchField2 = Keys[2]; // "start"
    var searchField3 = Keys[3]; // "stop"
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


//Get list of Id from filtered data
function GetFilteredListId (JSONdata) {
  var MyArray = [];
  for (let i = 0 ; i < JSONdata.length ; i++) {
    MyArray.push(JSONdata[i]["_id"]);
  }
  return MyArray;
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
function GenerateTableColumns(data)
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
      FilteredData: null,
      FilteredListId: null,
      selection: [],
    };
    this.TableDataSize = null;
    //this.prevCNVData = JSON.stringify(props.CNVData);
  }

  componentDidMount() {
    //this.FilterCNVInfo();
    this.GenerateTableInfo();
  }

  // NOTE: this create issues with table checkbox
  // shouldComponentUpdate(nextProps) {
  //   if (this.prevCNVData === nextProps.CNVData) {
  //     return false;
  //   }

  //   console.log('yes', nextProps.CNVData);
  //   console.log("shouldComponentUpdate: CNVTable");
  //   this.prevCNVData = nextProps.CNVData;
  //   return true;
  // }

  // Compare incoming Props with current props: new filtering and update when needed
  componentWillReceiveProps(nextProps) {
    var ThisLocationString = this.props.location.toString();
    var NextLocationString = nextProps.location.toString();

    if (ThisLocationString !== NextLocationString) {
      console.log("nextProps ", nextProps.location);
      this.FilterCNVInformation(nextProps.location,this.state.TableData);
    }
  }


  // // Compare incoming Props with current props: new filtering and update when needed
  // componentWillReceiveProps_old(nextProps) {
  //   // var ThisLocationString = this.props.location.toString();
  //   // var NextLocationString = nextProps.location.toString();
  //   // var ThisCNVDataLength = this.props.CNVData.length;
  //   // var NextCNVDataLength = nextProps.CNVData.length;
  //   // if ((ThisLocationString !== NextLocationString) | (ThisCNVDataLength !== NextCNVDataLength)) {
  //   //   this.FilterCNVInfo2(nextProps);
  //   // }
  // }

  // // Filter data and update table 
  // FilterCNVInfo() {
  //   var TableInfo = FilterInfo(this.props.location,this.props.CNVData);
  //   this.UpdateTableData(TableInfo);
  // }

  // // Filter data based on incoming props, and update table
  // FilterCNVInfo2(nextProps) {
  //   var TableInfo = FilterInfo(nextProps.location,nextProps.CNVData);
  //   this.UpdateTable(TableInfo);
  // }

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

  // Update state of FilteredData
  UpdateFilteredData (data) {
    this.setState(function () {
      return {
        FilteredData: data
      }
    });
  }

  // Update state of FilteredListId
  UpdateFilteredListId (ListId) {
    this.setState(function () {
      return {
        FilteredListId: ListId
      }
    });
  }

  GenerateTableInfo () {
    // Create Table Data including uid
    var Data = GenerateTableData(this.props.CNVData);
    this.UpdateTableData(Data);
    console.log("TABLE - Data ", Data);

    // Table Data size (for table display)
    this.TableDataSize = Data.length;
    console.log("TABLE - DataSze ", this.TableDataSize);

    // Create Table Column information
    var Columns = GenerateTableColumns(Data);
    this.UpdateTableColumns(Columns);
    console.log("TABLE - Columns ", Columns);

    // Filter CNV Information
    this.FilterCNVInformation(this.props.location, Data);
  }

  FilterCNVInformation(location, data) {
    // Filter CNV Info
    var FilteredData = FilterInfo(location,data);
    this.UpdateFilteredData(FilteredData);
    console.log("Location ", location);
    console.log("Filtered Data ", FilteredData);

    // Get only Id in an array (instead of full filtered data)
    var FilteredListId = GetFilteredListId(FilteredData);
    this.UpdateFilteredListId(FilteredListId);
        console.log("FilteredListId ", FilteredListId);
  }

  // ToggleSelection in Table component
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

  // Internal function for table component
  isSelected = (key) => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  }

  // Button to log selected rows
  logSelection = () => {
    console.log('selection:', this.state.selection);
  }

// NOTES: Test doesn't work
  // TrProps = (state, rowInfo, column, instance) => {
  //   //console.log('TABLE - rowInfo:', rowInfo);
  //   const props = {
  //     onClick: () => {
  //       that.setState({
  //         selectedRowIndex: rowInfo.index,
  //       });
  //     },
  //     style: {
  //       background: rowInfo.index === that.state.selectedRowIndex ? 'rgba(0, 175, 236, 0.3)' : null,
  //       background: rowInfo.row.qual > 90 ? 'green' : null,  
  //     },
  //   };
  //   return props;
  // }

// NOTE: this is an example
  // onRowClick = (state, rowInfo, column, instance) => {
  //   return {
  //       onClick: e => {
  //           console.log('A Td Element was clicked!')
  //           console.log('it produced this event:', e)
  //           console.log('It was in this column:', column)
  //           console.log('It was in this row:', rowInfo)
  //           console.log('It was in this table instance:', instance)
  //       }
  //   }
  // }

  // function to handle row click
  handleRowClick (rowInfo) {
    this.props.onRowEnter(rowInfo.row);
  }

  // handle Table background info
  handleRowBackground (rowInfo) {
    var Color = null;
    const isFiltered = this.state.FilteredListId.includes(rowInfo.original._id);
    //if (rowInfo.original._id === 'chr3-63821946') {
    if (isFiltered) {
      //Color = "rgb(182,190,254)";  
      Color = 'PowderBlue';
    }
    return Color;
  }

	render () {
    const { toggleSelection, isSelected, logSelection } = this;
    const { TableData, TableColumns } = this.state;

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
          {TableData && TableColumns && 
            <CheckboxTable
              ref={(r)=>this.checkboxTable=r}
              data={TableData}
              columns={TableColumns}
              defaultPageSize={this.TableDataSize}
              style={{
                height: "400px"
              }}
              className="-striped -highlight"
              showPagination={false}
              {...checkboxProps}
              getTrProps={(state, rowInfo) => {
                const props = {
                  onClick: e => {
                    return this.handleRowClick(rowInfo);
                  },
                  style: {
                    background: this.handleRowBackground(rowInfo),  
                  },
                };
                return props;
              }}
            />
          }
        </div>
      </div>
		)
	}
}

//           TrComponent={MyTrComponent}

          // NOTE: THIS WORKS
          //   getTrProps={(state, rowInfo) => {
          //   const props = {
          //     onClick: () => {
          //       this.setState({
          //         selectedRowIndex: rowInfo.index,
          //       });
          //     },
          //     style: {
          //       background: rowInfo.index === this.state.selectedRowIndex ? 'rgba(0, 175, 236, 0.3)' : null,
          //       background: rowInfo.row.qual > 90 ? 'green' : null,  
          //     },
          //   };
          //   return props;
          // }}
          // />
          // }

CNVTable.propTypes = {
  CNVData: PropTypes.array.isRequired,
  location: PropTypes.array.isRequired
}


export default CNVTable;
