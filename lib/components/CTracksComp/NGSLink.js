'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NGSLink = function (_Component) {
  _inherits(NGSLink, _Component);

  function NGSLink(props) {
    _classCallCheck(this, NGSLink);

    var _this = _possibleConstructorReturn(this, (NGSLink.__proto__ || Object.getPrototypeOf(NGSLink)).call(this, props));

    _this.state = {
      NGSLink: null
    };
    return _this;
  }

  _createClass(NGSLink, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.GenerateNGSLink();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var ThisCNVSelectionString = this.props.CNVSelection.toString();
      var NextCNVSelectionString = nextProps.CNVSelection.toString();

      if (ThisCNVSelectionString !== NextCNVSelectionString) {
        this.GenerateNGSLink(nextProps.CNVSelection);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      if (this.prevCNVSelection === newProps.CNVSelection.length) {
        return false;
      }

      this.prevCNVSelection = newProps.CNVSelection.length;
      return true;
    }
  }, {
    key: 'GenerateNGSLink',
    value: function GenerateNGSLink(CNVSelection) {
      //  "referralAdress": "https://ngs-web-Adress/variant?sampleCatalogId=2&id={ID}",
      var referralAdress = this.props.referralAdress;

      if (CNVSelection === undefined) CNVSelection = this.props.CNVSelection;

      var TemplateID = "&id={ID}";
      var newIDList = "";

      if (CNVSelection !== "") {
        for (var i = 0; i < CNVSelection.length; i++) {
          var newID = TemplateID.replace("ID", CNVSelection[i]);
          newIDList = newIDList + newID;
        }
        referralAdress = referralAdress.replace(TemplateID, newIDList);
      } else {
        var _newIDList = TemplateID.replace("ID", "");
        referralAdress = referralAdress.replace(TemplateID, _newIDList);
      }

      //console.log("referralAdress",referralAdress);
      this.UpdateNGSLink(referralAdress);
    }

    // Update state of NGSLink

  }, {
    key: 'UpdateNGSLink',
    value: function UpdateNGSLink(Link) {
      this.setState(function () {
        return {
          NGSLink: Link
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: this.state.NGSLink, target: '_blank' },
          'NGS Link with CNV samples'
        )
      );
    }
  }]);

  return NGSLink;
}(_react.Component);

NGSLink.propTypes = {
  referralAdress: _propTypes2.default.string.isRequired
};

exports.default = NGSLink;