'use strict';

module.exports = {
	getRunCommand: function getRunCommand(problem) {
		var jsCommand = process.env.JS_COMMAND || 'js';
		
		if (process.env.KATTIS_JAVASCRIPT_NODE) {
			return 'PROBLEM_ID=' + problem.id + ' node run-node.js';
		}
		
		return jsCommand + ' problems/' + problem.id + '/javascript/solution.js';
	}
};
