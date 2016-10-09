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

if(argv.indexOf("-v") !== -1 || argv.indexOf("--version") !== -1) {
	console.log('appium-running '+ ('v.'+pkg.version).cyan);
	return;
}

var ar = require('./dist/index.js').default;
ar(argv[0]).then(function(success){
	if(success) console.log("YES".cyan);
	else console.log("NO".red);
});
