'use strict'
module.exports = function(port, callback) {
	var port = isNaN(port) ? 4723 : parseInt(port),
	req = require("request"),
	appiumURL = "http://127.0.0.1:"+port+"/wd/hub/status";
  req.get({url:appiumURL,timeout: 2000}, function (error, response, body) {
		if(error || response.statusCode != 200) {
			callback(false);
			return;
		}
		callback(true);
	});
}
