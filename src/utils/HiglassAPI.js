//import * as hglib from 'higlass';

export default {
	// get ViewUID (first view)
	fetchViewConfig: function () {
		return window.hgApi.get('viewConfig')
        .then(function (viewConfig) {
          var vc = JSON.parse(viewConfig);
          return vc.views[0].uid;
        });
	},
	// get current Location (retrieve ViewUID automatically)
	fetchLocationAuto: function() {
		return window.hgApi.get('viewConfig')
      .then(function (viewConfig) {
        var vc = JSON.parse(viewConfig);
        return vc.views[0].uid;
      })
      .then (function (viewUID) {
	 			return window.hgApi.get('location',viewUID);
		 	})
		 	.then (function (location) {
	 			return location;
		 	});
	},
	// get current location (needs ViewUID as an input)
	fetchLocation: function(viewUID) {
		return window.hgApi.get('location',viewUID)
		 	.then (function (location) {
		 		return location;
		 	});
	}
}


