import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NGSLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NGSLink: null,
    };
	}

  componentWillMount() {
  	this.GenerateNGSLink();
  }

  componentWillReceiveProps(nextProps) {
  	var ThisCNVSelectionString = this.props.CNVSelection.toString();
    var NextCNVSelectionString = nextProps.CNVSelection.toString();

    if (ThisCNVSelectionString !== NextCNVSelectionString) {
      this.GenerateNGSLink(nextProps.CNVSelection);
    }
  }

  shouldComponentUpdate(newProps, newState) {
    if (this.prevCNVSelection === newProps.CNVSelection.length) {
      return false;
    }

    this.prevCNVSelection = newProps.CNVSelection.length;
    return true;
  }

  GenerateNGSLink(CNVSelection) {
    //  "referralAdress": "https://ngs-web-Adress/variant?sampleCatalogId=2&id={ID}",
    var referralAdress = this.props.referralAdress;

		if (CNVSelection === undefined) CNVSelection = this.props.CNVSelection;

    var TemplateID = "&id={ID}";
    var newIDList = "";

    if (CNVSelection !== "") {
      for (let i = 0; i < CNVSelection.length; i++) {
        let newID = TemplateID.replace("ID",CNVSelection[i]);
        newIDList = newIDList + newID;
      }
      referralAdress = referralAdress.replace(TemplateID,newIDList);
    }
    else {
      let newIDList = TemplateID.replace("ID","");
      referralAdress = referralAdress.replace(TemplateID,newIDList); 
    }

    //console.log("referralAdress",referralAdress);
    this.UpdateNGSLink(referralAdress);
  }

  // Update state of NGSLink
  UpdateNGSLink (Link) {
    this.setState(function () {
      return {
        NGSLink: Link
      }
    })    
  }

  render() {
    return (

      <div>
        <a href={this.state.NGSLink} target="_blank">NGS Link with CNV samples</a>
      </div>

    );
  }

}

NGSLink.propTypes = {
  referralAdress: PropTypes.string.isRequired,
}

export default NGSLink;


