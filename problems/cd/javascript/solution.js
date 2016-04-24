'use strict';

var input;
var N;
var M;
var cds;
var i;
var pointer;
var sellCount;

while (true) {
	input = readline().split(' ');
	N = parseInt(input[0], 10);
	M = parseInt(input[1], 10);

	if (N === 0 && M === 0) {
		break;
	}

	cds = [];
	pointer = 0;
	sellCount = 0;

	for (i = 0; i < N; i++) {
		cds.push(parseInt(readline(), 10));
	}

	for (i = 0; i < M; i++) {
		input = parseInt(readline(), 10);

		while (pointer < cds.length - 1 && cds[pointer] < input) {
			pointer++;
		}

		if (cds[pointer] === input) {
			sellCount++;
		}
	}
	print(sellCount);
}
