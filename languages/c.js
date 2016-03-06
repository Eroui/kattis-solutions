'use strict';

module.exports = {
	getCompileCommand: function getCompileCommand(problem) {
		return 'cc -g -O2 -std=gnu99 -static problems/' + problem.id + '/c/solution.c -o build/' + problem.id + '.bin -lm';
	},

	getRunCommand: function getRunCommand(problem) {
		return './build/' + problem.id + '.bin';
	}
};
