var ar = require('../index.js');
var req = require('request');

describe("Apigiphy instance test", function(){
  
  it("Test appium-running got the correct answer", function(done){
    req("http://127.0.0.1:4723/wd/hub/status", function (error, response, body) {
		  var runing = error || response.statusCode != 200 ? false : true;
      ar(4723, function(success){
        if(runing == success) done();
        else throw new Error("appium-runing get wrong answer");
      });
	  });
  });
});
