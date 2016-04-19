'use strict';

var signitures = [
	'**** ** ** ****', // 0
	'  *  *  *  *  *', // 1
	'***  *****  ***', // 2
	'***  ****  ****', // 3
	'* ** ****  *  *', // 4
	'****  ***  ****', // 5
	'****  **** ****', // 6
	'***  *  *  *  *', // 7
	'**** ***** ****', // 8
	'**** ****  ****'  // 9
];

var i;
var j;
var inputLines = [];
var numbers = [];
var input;
var value = 0;
var digit;

for (i = 0; i < 5; i++) {
	inputLines.push(group(readline()));
}

for (i = 0; i < inputLines[0].length; i++) {
	input = '';
	for (j = 0; j < 5; j++) {
		input += inputLines[j][i];
	}
	numbers.push(input);
}

for (i = 0; i < numbers.length; i++) {
	digit = signitures.indexOf(numbers[i]);
	if (digit === -1) {
		value = -1;
		break;
	}
	value *= 10;
	value += digit;
}

if (value === -1 || ((value % 6) !== 0)) {
	print('BOOM!!');
}
else {
	print('BEER!!');
}

function group(line) {
	var k;
	var output = [];

	// break line into single line of each number, removing spacing
	for (k = 0; k < line.length; k += 4) {
		output.push(line.slice(k, k + 3));
	}
	return output;
}
