'use strict';

var cases = parseInt(readline(), 10);
var i;
var j;
var numTrips;
var places;

for (i = 0; i < cases; i++) {
	numTrips = parseInt(readline(), 10);
	places = new Set();

	for (j = 0; j < numTrips; j++) {
		places.add(readline());
	}

	print(places.size);
}
