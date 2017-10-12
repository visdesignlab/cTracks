export default {
	// retrieve ViewUID (for bottom view)
	fetchViewConfig: function () {
		return window.hgApi.get('viewConfig')
        .then(function (viewConfig) {
          var vc = JSON.parse(viewConfig);
          return vc.views[1].uid;
        });
	},
	// retrieve current Location (ViewUID is found)
	fetchLocation: function() {
		return window.hgApi.get('viewConfig')
      .then(function (viewConfig) {
        var vc = JSON.parse(viewConfig);
        console.log('viewUID:',vc.views[1].uid);
        return vc.views[1].uid;
      })
      .then (function (viewUID) {
	 			return window.hgApi.get('location',viewUID);
		 	})
		 	.then (function (location) {
	 			return location;
		 	});
	},
	// retrieve current location (needs ViewUID as an input)
	fetchLocation_ViewUID: function(viewUID) {
		return window.hgApi.get('location',viewUID)
		 	.then (function (location) {
		 		return location;
		 	});
	}
}


