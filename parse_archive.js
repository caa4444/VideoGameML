// node parse_archive.js runescape_pages_current.xml
var fs = require('fs');
var LineByLineReader = require('line-by-line'),

fileAddr = process.argv[2];
lr = new LineByLineReader(fileAddr);

lr.on('error', function (err) {
	console.log("error: " + String(err));
	return;
});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
});

lr.on('end', function () {
	console.log("finished reading");
	return;
});