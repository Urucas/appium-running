appium-running
==============

Checks if appium is running, answers YES or NO.

Install
=======
npm install appium-running

Usage
=====

* globally
```bash 
appium-running
```

* inside your source, for ex. a node test

```javascript
var ar = require('appium-running');
ar(4723, function(success){
  if(success) {
    console.log("Appium is running, move on!");
    // run test
  }else{
    console.log("Appium is not running, exec appium &");
    // throw exception
  }
});
