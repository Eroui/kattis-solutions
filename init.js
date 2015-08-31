var fs = require('fs');
var async = require('async');
var validator = require('validator');
var promptly = require('promptly');
var jsonfile = require('jsonfile');

jsonfile.spaces = '\t';

var tasks = [
	promptStart,
	promptId,
	promptName,
	promptCaseName,
	promptNumCases,
	promptConfirm,
	createProblemDirectory,
	writeFile
];

async.waterfall(tasks, function(err, v) {
	if (err) {
		console.error('An error occured: ' + err.message);
		return;
	}
	console.log('Problem description file created');
});

function validatorString(value) {
	if (!validator.isLength(value, 1)) {
		throw new Error('Must be a valid string');
	}
	return value;
}

function validatorNumber(value) {
	if (!validator.isInt(value, {min: 1, max: 100})) {
		throw new Error('Number between 1 and 100 required');
	}
	return validator.toInt(value, 10);
}

function promptStart(callback, values) {
	if (values) {
		return callback(null, values);
	}
	
	callback(null, {
		id: null,
		name: null,
		caseName: null,
		numCases: null
	});
}

function promptId(values, callback) {
	promptly.prompt('Problem id:', {
		validator: validatorString,
		value: values.id
	}, function(err, value) {
		if (err) {
			console.error('Invalid id: ' + err.message);
			return err.retry();
		}
		values.id = value;
		callback(null, values);
	});
}

function promptName(values, callback) {
	promptly.prompt('Problem name:', {
		validator: validatorString,
		value: values.name
	}, function(err, value) {
		if (err) {
			console.error('Invalid name: ' + err.message);
			return err.retry();
		}
		values.name = value;
		callback(null, values);
	});
}

function promptCaseName(values, callback) {
	promptly.prompt('Test case base: ', {
		validator: validatorString,
		value: values.caseName
	}, function(err, value) {
		if (err) {
			console.error('Invalid base case:' + err.message);
			return err.retry();
		}
		values.caseName = value;
		callback(null, values);
	});
}

function promptNumCases(values, callback) {
	promptly.prompt('# of test cases: ', {
		validator: validatorNumber,
		value: values.numCases
	}, function(err, value) {
		if (err) {
			console.error('Invalid # of cases:' + err.message);
			return err.retry();
		}
		values.numCases = value;
		callback(null, values);
	});
}

function promptConfirm(values, callback) {
	var i;
	var name;
	var description = {
		id: values.id,
		name: values.name,
		testCases: {
		}
	};
	
	if (values.numCases === 1) {
		description.testCases[values.caseName + '.in'] = values.caseName + '.out';
	}
	else {
		for (i = 0; i < values.numCases; i++) {
			name = values.caseName + '.' + i;
			description.testCases[name + '.in'] = name + '.out';
		}
	}

	console.log(JSON.stringify(description, null, '\t'));

	promptly.confirm('Write File? ', function(err, value) {
		if (value) {
			return callback(err, description);
		}
		console.error('Problem description rejected');
	});
}

function createProblemDirectory(description, callback) {
	var dir = 'problems/' + description.id + '/';
	fs.stat(dir, function(err, stat) {
		if (err) {
			console.error('Problem directory missing; creating');
			fs.mkdir(dir, function(err) {
				callback(err, description);
			});
			return;
		}
		return callback(err, description);
	});
}

function writeFile(description, callback) {
	var filename = 'problems/' + description.id + '/description.json';
	jsonfile.writeFile(filename, description, callback);
}
