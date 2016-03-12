'use strict';

var line;
var dictionary = {};
var tmp;

while (true) {
	line = readline();
	if (!line) {
		break;
	}
	tmp = line.split(' ');
	dictionary[tmp[1]] = tmp[0];
}

while (true) {
	line = readline();
	if (!line) {
		break;
	}
	tmp = dictionary[line];
	print(tmp ? tmp : 'eh');
}
