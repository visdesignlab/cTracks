'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HiglassAPI = require('./utils/HiglassAPI');

var _HiglassAPI2 = _interopRequireDefault(_HiglassAPI);

require('./ChromView.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChromView = function (_Component) {
		_inherits(ChromView, _Component);

		function ChromView(props) {
				_classCallCheck(this, ChromView);

				var _this = _possibleConstructorReturn(this, (ChromView.__proto__ || Object.getPrototypeOf(ChromView)).call(this, props));

				_this.chromSizes = null;
				_this.state = {
						value: "chr3"
				};

				_this.InitChromSizes = _this.InitChromSizes.bind(_this);
				_this.handleChange = _this.handleChange.bind(_this);
				_this.handleSubmit = _this.handleSubmit.bind(_this);
				return _this;
		}

		_createClass(ChromView, [{
				key: 'componentWillMount',
				value: function componentWillMount() {
						this.InitChromSizes();
				}

				// Retrieve / Set chromosome size information (default assembly 'b37')
				// Option 1 - Hardcode information
				// Option 2 - retrieve information from file 

		}, {
				key: 'InitChromSizes',
				value: function InitChromSizes() {
						// WARNING - Default assembly: b37
						this.chromSizes = [{ "chrom": "chr1", "size": 249250621 }, { "chrom": "chr2", "size": 243199373 }, { "chrom": "chr3", "size": 198022430 }, { "chrom": "chr4", "size": 191154276 }, { "chrom": "chr5", "size": 180915260 }, { "chrom": "chr6", "size": 171115067 }, { "chrom": "chr7", "size": 159138663 }, { "chrom": "chr8", "size": 146364022 }, { "chrom": "chr9", "size": 141213431 }, { "chrom": "chr10", "size": 135534747 }, { "chrom": "chr11", "size": 135006516 }, { "chrom": "chr12", "size": 133851895 }, { "chrom": "chr13", "size": 115169878 }, { "chrom": "chr14", "size": 107349540 }, { "chrom": "chr15", "size": 102531392 }, { "chrom": "chr16", "size": 90354753 }, { "chrom": "chr17", "size": 81195210 }, { "chrom": "chr18", "size": 78077248 }, { "chrom": "chr19", "size": 59128983 }, { "chrom": "chr20", "size": 63025520 }, { "chrom": "chr21", "size": 48129895 }, { "chrom": "chr22", "size": 51304566 }, { "chrom": "chrX", "size": 155270560 }, { "chrom": "chrY", "size": 59373566 }, { "chrom": "chrMT", "size": 16569 }];
						//console.log('chromSizes:',this.chromSizes);
				}

				// Get specific chromosome size

		}, {
				key: 'GetChromSize',
				value: function GetChromSize() {
						var ChromSize = null;
						for (var i = 0; i < this.chromSizes.length; i++) {
								if (this.chromSizes[i].chrom === this.state.value) {
										ChromSize = this.chromSizes[i].size;
										break;
								}
						}
						return ChromSize;
				}
		}, {
				key: 'handleChange',
				value: function handleChange(event) {
						//console.log('chrom:',event.target.value);
						this.setState({ value: event.target.value });
				}
		}, {
				key: 'handleSubmit',
				value: function handleSubmit(event) {
						event.preventDefault();

						var ChromBegin = 1;
						var ChromEnd = this.GetChromSize();

						_HiglassAPI2.default.fetchViewConfig().then(function (ViewID) {
								window.hgApi.goTo(ViewID, this.state.value, ChromBegin, ChromEnd, this.state.value, ChromBegin, ChromEnd, true, 2000);
						}.bind(this));
				}
		}, {
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'form',
								{ className: 'ChromView', onSubmit: this.handleSubmit },
								_react2.default.createElement(
										'select',
										{ value: this.state.value, onChange: this.handleChange },
										_react2.default.createElement(
												'option',
												{ value: 'chr1' },
												'chr1'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr2' },
												'chr2'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr3' },
												'chr3'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr4' },
												'chr4'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr5' },
												'chr5'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr6' },
												'chr6'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr7' },
												'chr7'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr8' },
												'chr8'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr9' },
												'chr9'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr10' },
												'chr10'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr11' },
												'chr11'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr12' },
												'chr12'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr13' },
												'chr13'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr14' },
												'chr14'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr15' },
												'chr15'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr16' },
												'chr16'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr17' },
												'chr17'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr18' },
												'chr18'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr19' },
												'chr19'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr20' },
												'chr20'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr21' },
												'chr21'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chr22' },
												'chr22'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chrX' },
												'chrX'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chrY' },
												'chrY'
										),
										_react2.default.createElement(
												'option',
												{ value: 'chrM' },
												'chrM'
										)
								),
								_react2.default.createElement('input', { className: 'btn btn-default', type: 'submit', value: 'Update Location' })
						);
				}
		}]);

		return ChromView;
}(_react.Component);

exports.default = ChromView;