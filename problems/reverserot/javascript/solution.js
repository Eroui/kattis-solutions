'use strict';

var A_CODE = 'A'.charCodeAt(0);
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_.'.split('');
var line;
var shiftAmount;
var newLine;
var i;
var charCode;

while (true) {
	line = readline();

	if (line === '0') {
		break;
	}

	line = line.split(' ');
	shiftAmount = parseInt(line[0], 10);
	line = line[1].trim().split('').reverse();
	newLine = new Array(line.length);

	for (i = 0; i < line.length; i++) {
		if (line[i] === '_') {
			charCode = 26;
		}
		else if (line[i] === '.') {
			charCode = 27;
		}
		else {
			charCode = line[i].charCodeAt(0) - A_CODE;
		}
		
		charCode += shiftAmount;
		charCode = charCode % alphabet.length;
		newLine[i] = alphabet[charCode];
	}

	print(newLine.join(''));
}
