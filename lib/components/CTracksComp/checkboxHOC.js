var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

export default (Component => {

  const wrapper = class RTCheckboxTable extends React.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.rowSelector = row => {
        if (!row || !row.hasOwnProperty(this.props.keyField)) return null;
        const checked = this.props.isSelected(row[this.props.keyField]);
        return React.createElement('input', {
          type: 'checkbox',
          checked: checked,
          onClick: e => {
            const { shiftKey } = e;
            e.stopPropagation();
            this.props.toggleSelection(row[this.props.keyField], shiftKey, row);
          },
          onChange: () => {},
          value: ''
        });
      }, this.headSelector = row => {
        const checked = this.props.selectAll;
        return React.createElement('input', {
          type: 'checkbox',
          checked: checked,
          onClick: e => {
            e.stopPropagation();
            this.props.toggleAll();
          },
          onChange: () => {},
          value: ''
        });
      }, this.getWrappedInstance = () => this.wrappedInstance, _temp;
    }
    // we only need a Component so we can get the 'ref' - pure components can't get a 'ref'

    // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll


    render() {
      const _props = this.props,
            { columns: originalCols, isSelected, toggleSelection, toggleAll, keyField, selectAll } = _props,
            rest = _objectWithoutProperties(_props, ['columns', 'isSelected', 'toggleSelection', 'toggleAll', 'keyField', 'selectAll']);
      const { rowSelector, headSelector } = this;
      const select = {
        id: '_selector',
        accessor: () => 'x', // this value is not important
        Header: headSelector,
        Cell: ci => {
          return rowSelector(ci.original);
        },
        width: 30,
        filterable: false,
        sortable: false,
        resizable: false,
        style: { textAlign: 'center' }
      };
      const columns = [select, ...originalCols];
      const extra = {
        columns
      };
      return React.createElement(Component, _extends({}, rest, extra, { ref: r => this.wrappedInstance = r }));
    }
  };

  wrapper.displayName = 'RTCheckboxTable';
  wrapper.defaultProps = {
    keyField: '_id',
    isSelected: key => {
      console.log('No isSelected handler provided:', { key });
    },
    selectAll: false,
    toggleSelection: (key, shift, row) => {
      console.log('No toggleSelection handler provided:', { key, shift, row });
    },
    toggleAll: () => {
      console.log('No toggleAll handler provided.');
    }
  };

  return wrapper;
});