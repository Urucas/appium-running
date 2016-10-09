appium-running [![Build Status](https://travis-ci.org/Urucas/appium-running.svg?branch=master)](https://travis-ci.org/Urucas/appium-running)
==============

Tells you if appium is running or available.

Install
=======
npm install appium-running

Usage
=====

```javascript
import ar from 'appium-running';
ar(4723).then( (success) => {
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
