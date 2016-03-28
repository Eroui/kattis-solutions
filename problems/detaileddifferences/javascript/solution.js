'use strict';

var numpairs = parseInt(readline(), 10);
var i;
var j;
var line1;
var line2;
var output;

for (i = 0; i < numpairs; i++) {
	line1 = readline();
	line2 = readline();
	output = [];

	for (j = 0; j < line1.length; j++) {
		if (line1.charAt(j) === line2.charAt(j)) {
			output.push('.');
		}
		else {
			output.push('*');
		}
	}

	print(line1);
	print(line2);
	print(output.join(''));
	if (i < numpairs - 1) {
		print();
	}
}
