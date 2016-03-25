'use strict';

var n;
var graph;
var i;
var j;
var row;
var unstable;

while (true) {
	unstable = [];
	n = parseInt(readline(), 10);

	if (n === -1) {
		break;
	}

	graph = new Array(n);

	for (i = 0; i < n; i++) {
		graph[i] = [];
		row = readline().split(' ');
		for (j = 0; j < row.length; j++) {
			if (row[j] === '1') {
				graph[i].push(j);
			}
		}
	}

	for (i = 0; i < n; i++) {
		if (!checkVertex(graph, i)) {
			unstable.push(i);
		}
	}
	print(unstable.join(' '));
}


function checkVertex(g, v) {
	var x;
	var X;
	var y;
	var Y;
	var stable = false;

	// for each edge in V
	for (x = 0; x < g[v].length; x++) {
		X = g[v][x];
		// for each edge in V"
		for (y = 0; y < g[X].length; y++) {
			Y = g[X][y];
			// skip V
			if (Y === v) {
				continue;
			}
			if (g[Y].indexOf(v) !== -1) {
				// if second stable then we return now
				if (stable) {
					return true;
				}
				stable = true;
			}
		}
	}
	return false;
}
