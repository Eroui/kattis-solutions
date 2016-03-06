'use strict';

module.exports = {
	getRunCommand: function getRunCommand(problem) {
		return 'python problems/' + problem.id + '/python/solution.py';
	}
};
