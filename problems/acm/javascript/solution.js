'use strict';

var line;
var scores = {};
var score;
var totalScore = 0;
var totalProblemsSolved = 0;

while (true) {
	line = readline();
	if (line === '-1') {
		break;
	}

	line = line.split(' ');

	if (!scores[line[1]]) {
		scores[line[1]] = {
			time: 0,
			correct: false,
			attempts: 0
		};
	}
	// already solved, skip
	if (scores[line[1]].correct) {
		continue;
	}

	scores[line[1]].time = parseInt(line[0], 10);
	scores[line[1]].attempts++;

	scores[line[1]].correct = (line[2] === 'right');
}

for (score in scores) {
	if (scores[score].correct) {
		totalScore += scores[score].time + (scores[score].attempts - 1) * 20;
		totalProblemsSolved++;
	}
}

print(totalProblemsSolved, totalScore);
