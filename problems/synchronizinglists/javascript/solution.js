'use strict';

var numValues;
var listA;
var listAPrime;
var listB;
var i;
var guardFirst = false;

while (1) {
	numValues = parseInt(readline(), 10);

	if (numValues === 0) {
		break;
	}

	if (guardFirst) {
		print();
	}
	else {
		guardFirst = true;
	}

	listA = [];
	listB = [];

	for (i = 0; i < numValues; i++) {
		listA[i] = parseInt(readline(), 10);
	}

	for (i = 0; i < numValues; i++) {
		listB[i] = parseInt(readline(), 10);
	}

	listAPrime = listA.slice(0).sort(sortNumber);
	listB.sort(sortNumber);

	for (i = 0; i < numValues; i++) {
		print(listB[listAPrime.indexOf(listA[i])]);
	}
}

function sortNumber(a, b) {
	return a - b;
}
