'use strict';

module.exports = {
	getRunCommand: function getRunCommand(problem) {
		var jsCommand = process.env.JS_COMMAND || 'js';
		
		return jsCommand + ' problems/' + problem.id + '/javascript/solution.js';
	}
};
