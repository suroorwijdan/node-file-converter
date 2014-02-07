#! /usr/bin/env node

/*


 * node-file-converter
 * https://github.com/suroorwijdan/node-file-converter
 *
 * Copyright (c) 2014 Suroor Wijdan
 * Licensed under the MIT license.
 */

'use strict';

var nodeCsv = require("node-csv-json");

var argumentsPassed = process.argv.slice(2);	

var sourceFile = argumentsPassed[0];
var outputFile = argumentsPassed[1];

nodeCsv({
	input: sourceFile,
	output: outputFile
}, function(error, result){
	if(error){
		console.log('Error: ', error);
	} else {
		console.log('Result: ', result);
	}
});