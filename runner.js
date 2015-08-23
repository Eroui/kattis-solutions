var async = require('async');
var exec = require('child_process').exec;
var fs = require('fs');
var descriptions = require('./problems.json');

var DEBUG = false;
if (DEBUG) {
	exec = function(cmd, cb) {
		console.log(cmd);
		cb(null, '', '');
	}
}

var PARAM_STDOUT = 0;
var PARAM_STDERR = 1;

var problems = [];

try {
	fs.lstatSync('build/');
}
catch(e) {
	process.stderr.write('Build directory missing; creating');
	fs.mkdirSync('build/');
}

descriptions.forEach(function(description) {
	problems.push(compileProblem.bind(null, description));
	problems.push(runProblem.bind(null, description))
});

async.series(problems);

function compileProblem(problem, cb) {
	var cmd = 'cc -g -O2 -std=gnu99 -static -lm problems/' + problem.id + '/solution.c -o build/' + problem.id + '.bin';
	exec(cmd, function(err, stdout, stderr) {
		if (stderr) {
			process.stderr.write(stderr);
		}
		if (stdout) {
			process.stdout.write(stdout);
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
			process.stderr.write(stderr);
		}

		process.stdout.write(problem.name + ' (' + testFile + '): ')

		if (err) {
			process.stdout.write('(fail)');
			process.stderr.write(err.message);
			return cb(err, stdout, stderr);
		}

		if (stdout !== output) {
			process.stdout.write('(fail)\n');
			process.stderr.write('                  Expected\n');
			process.stderr.write('--------------------------\n');
			process.stderr.write(output);
			if (stdout[stdout.length -1]) {
				process.stderr.write('\n');
			}
			process.stderr.write('--------------------------\n\n');
			process.stderr.write('                    Actual\n');
			process.stderr.write('--------------------------\n');
			process.stderr.write(stdout);
			if (stdout[stdout.length -1]) {
				process.stderr.write('\n');
			}
			process.stderr.write('--------------------------\n');
			return cb(new Error('No match'), stdout, stderr);
		}
		
		process.stdout.write('(pass)\n');
		return cb(null, stdout, stderr);
	});
	child.stdin.write(input);
	child.stdin.end();
}
