import React, { Component } from 'react';

import HiglassAPI from './utils/HiglassAPI';
import './ChromView.css';

class ChromView extends Component {
  constructor(props) {
    super(props);
    this.chromSizes = null;
    this.state = {
    	value: "chr3"
    };

    this.InitChromSizes = this.InitChromSizes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
  	this.InitChromSizes();
  }

  // Retrieve / Set chromosome size information (default assembly 'b37')
  // Option 1 - Hardcode information
  // Option 2 - retrieve information from file 
  InitChromSizes() {
  	// WARNING - Default assembly: b37
  	this.chromSizes = [
			{"chrom":"chr1","size":249250621},
			{"chrom":"chr2","size":243199373},
			{"chrom":"chr3","size":198022430},
			{"chrom":"chr4","size":191154276},
			{"chrom":"chr5","size":180915260},
			{"chrom":"chr6","size":171115067},
			{"chrom":"chr7","size":159138663},
			{"chrom":"chr8","size":146364022},
			{"chrom":"chr9","size":141213431},
			{"chrom":"chr10","size":135534747},
			{"chrom":"chr11","size":135006516},
			{"chrom":"chr12","size":133851895},
			{"chrom":"chr13","size":115169878},
			{"chrom":"chr14","size":107349540},
			{"chrom":"chr15","size":102531392},
			{"chrom":"chr16","size":90354753},
			{"chrom":"chr17","size":81195210},
			{"chrom":"chr18","size":78077248},
			{"chrom":"chr19","size":59128983},
			{"chrom":"chr20","size":63025520},
			{"chrom":"chr21","size":48129895},
			{"chrom":"chr22","size":51304566},
			{"chrom":"chrX","size":155270560},
			{"chrom":"chrY","size":59373566},
			{"chrom":"chrMT","size":16569},
		];
		//console.log('chromSizes:',this.chromSizes);
  }

  // Get specific chromosome size
  GetChromSize() {
  	var ChromSize = null;
  	for (var i = 0; i < this.chromSizes.length;i++) {
    	if (this.chromSizes[i].chrom === this.state.value) {
    		ChromSize = this.chromSizes[i].size;
    		break;
    	}
    }
    return ChromSize;
  }

  handleChange(event) {
  	//console.log('chrom:',event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var ChromBegin = 1;
    var ChromEnd = this.GetChromSize();

    HiglassAPI.fetchViewConfig()
      .then(function(ViewID) {
        window.hgApi.goTo(ViewID, this.state.value, ChromBegin,ChromEnd,this.state.value,ChromBegin,ChromEnd,true,2000);
      }.bind(this)); 	
   
  }

  render() {
    return (
	      <form className = "ChromView" onSubmit={this.handleSubmit}>
	        <select value={this.state.value} onChange={this.handleChange}>
	          <option value="chr1">chr1</option>
	          <option value="chr2">chr2</option>
	          <option value="chr3">chr3</option>
	          <option value="chr4">chr4</option>
	          <option value="chr5">chr5</option>
	          <option value="chr6">chr6</option>
	          <option value="chr7">chr7</option>
	          <option value="chr8">chr8</option>
	          <option value="chr9">chr9</option>
	          <option value="chr10">chr10</option>
	          <option value="chr11">chr11</option>
	          <option value="chr12">chr12</option>
	          <option value="chr13">chr13</option>
	          <option value="chr14">chr14</option>
	          <option value="chr15">chr15</option>
	          <option value="chr16">chr16</option>
	          <option value="chr17">chr17</option>
	          <option value="chr18">chr18</option>
	          <option value="chr19">chr19</option>
	          <option value="chr20">chr20</option>
	          <option value="chr21">chr21</option>
	          <option value="chr22">chr22</option>
	          <option value="chrX">chrX</option>
	          <option value="chrY">chrY</option>
	          <option value="chrM">chrM</option>
	        </select>
	        <input className="btn btn-default" type="submit" value="Update Location" />
	      </form>
    );
  }
}


export default ChromView;