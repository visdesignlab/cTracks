'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	// retrieve ViewUID (for bottom view)
	fetchViewConfig: function fetchViewConfig() {
		return window.hgApi.get('viewConfig').then(function (viewConfig) {
			var vc = JSON.parse(viewConfig);
			return vc.views[1].uid;
		});
	},
	// retrieve current Location (ViewUID is found)
	fetchLocation: function fetchLocation() {
		return window.hgApi.get('viewConfig').then(function (viewConfig) {
			var vc = JSON.parse(viewConfig);
			return vc.views[1].uid;
		}).then(function (viewUID) {
			return window.hgApi.get('location', viewUID);
		}).then(function (location) {
			return location;
		});
	},
	// retrieve current location (needs ViewUID as an input)
	fetchLocation_ViewUID: function fetchLocation_ViewUID(viewUID) {
		return window.hgApi.get('location', viewUID).then(function (location) {
			return location;
		});
	}
};