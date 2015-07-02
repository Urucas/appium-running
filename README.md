appium-running [![Build Status](https://travis-ci.org/Urucas/appium-running.svg?branch=master)](https://travis-ci.org/Urucas/appium-running)
==============

Tells you if appium is running or available to use, answers YES or NO.

Install
=======
npm install -g appium-running

Usage
=====
```bash 
appium-running

# check a different port
appium-running 9505  
```

**API**

```javascript
var ar = require('appium-running');
/*
 * ar(port, callback);
 */
ar(4723, function(success){
  if(success) {
    console.log("Appium is running, move on!");
    // run test
  }else{
    console.log("Appium is not running, exec appium &");
    // throw exception
  }
});
```

<img src="https://raw.githubusercontent.com/Urucas/appium-running/master/appium-running.gif" />
