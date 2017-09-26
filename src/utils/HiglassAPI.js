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
        console.log('viewUID:',vc.views[0].uid);
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
	},
/*	onLocationChange: function (callback, callbackId) {
		return window.hgApi.get('viewConfig')
      .then(function (viewConfig) {
        var vc = JSON.parse(viewConfig);
        console.log('viewUID:',vc.views[0].uid);
        return vc.views[0].uid;
      })
      .then (function (viewUID) {
      	return window.hgApi.on('location',callback, viewUID, callbackId);
			});
	}
	*/
/*	onLocationChange: function (viewUID, callback, callbackId) {
		return window.hgApi.on('location',viewUID)
		console.log('Yuuhuu we are over here', yeahCool);
  }, function (id) {
    console.log('First Listener ID', id);
  });
	}*/
}


