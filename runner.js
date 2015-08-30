var async = require('async');
var exec = require('child_process').exec;
var fs = require('fs');
var descriptions = require('./problems.json');

var DEBUG = false;

var PARAM_STDOUT = 0;
var PARAM_STDERR = 1;

var tasks = [];
var problems = [];

if (DEBUG) {
	exec = function(cmd, cb) {
		console.log(cmd);
		cb(null, '', '');
	}
}

// create build directory if it does not exist
tasks.push(function(callback) {
	fs.stat('build/', function(err, stat) {
		if (err) {
			writeError('Build directory missing; creating\n');
			fs.mkdir('build/', callback);
			return;
		}
		return callback();
	});
});

tasks.push(function(callback) {
	var i;
	var id;

	for (i = 0; i < descriptions.length; i++) {
		var description;
		id = descriptions[i];
		try {
			description = require('./problems/' + id + '/description.json');
		}
		catch (e) {
			return callback(new Error('Problem, with id ' + id + ', does not have required "description.json" file'));
		}

		problems.push(compileProblem.bind(null, description));
		problems.push(runProblem.bind(null, description));
	}

	async.series(problems, function(err) {
		callback(err);
	});
});

async.series(tasks, function(err) {
	if (err) {
		console.log(err.message);
	}
	process.exit(err ? 1 : 0);
});

function writeError() {
	process.stderr.write.apply(process.stderr, arguments);
}

function compileProblem(problem, cb) {
	var cmd = 'cc -g -O2 -std=gnu99 -static -lm problems/' + problem.id + '/solution.c -o build/' + problem.id + '.bin';
	exec(cmd, function(err, stdout, stderr) {
		if (stderr) {
			writeError(stderr);
		}
		if (stdout) {
			writeError(stdout);
		}
		cb(err, stdout, stderr);
	});
}

function runProblem(problem, cb) {
	var cases = [];
	Object.keys(problem.testCases).forEach(function(testFile) {
		var inputFile = fs.readFileSync('problems/' + problem.id + '/' + testFile, {
			encoding: 'utf8'
		});
		var ouputFile = fs.readFileSync('problems/' + problem.id + '/' + problem.testCases[testFile], {
			encoding: 'utf8'
		});
		cases.push(runTestCase.bind(null, problem, testFile, inputFile, ouputFile));
	});
	async.series(cases, cb);
}

function runTestCase(problem, testFile, input, output, cb) {
	var cmd = './build/' + problem.id + '.bin';
	var child = exec(cmd, function(err, stdout, stderr) {
		if (stderr) {
			writeError(stderr);
		}

		process.stdout.write(problem.name + ' (' + testFile + '): ')

		if (err) {
			process.stdout.write('(fail)');
			writeError(err.message);
			return cb(err, stdout, stderr);
		}

		if (stdout !== output) {
			process.stdout.write('(fail)\n');
			writeError('                  Expected\n');
			writeError('--------------------------\n');
			writeError(output);
			if (stdout[stdout.length -1]) {
				writeError('\n');
			}
			writeError('--------------------------\n\n');
			writeError('                    Actual\n');
			writeError('--------------------------\n');
			writeError(stdout);
			if (stdout[stdout.length -1]) {
				writeError('\n');
			}
			writeError('--------------------------\n');
			return cb(new Error('No match'), stdout, stderr);
		}
		
		process.stdout.write('(pass)\n');
		return cb(null, stdout, stderr);
	});
	child.stdin.write(input);
	child.stdin.end();
}
