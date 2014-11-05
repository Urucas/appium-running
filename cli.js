#!/usr/bin/env node
'use strict'
var pkg = require('./package.json');
var colors = require('colors');
var argv = process.argv.slice(2);
if(argv.indexOf("--help") !== -1) {
	console.log([
		'',
		pkg.description,
		'',
		'Examples:',
		'Is appium running on the defaulr port(4723) ?',
		'$ appium-running',
		'YES'.cyan,
		'Is appium running n port:8080 ?',
		'$ appium-running 8080',
		'NO'.red
	].join('\n'));
	return;
}

var appiumRunning = require('./index.js');
appiumRunning(argv[0] || 4723, function(success){
	if(success) console.log("YES".cyan);
	else console.log("NO".red);
});
