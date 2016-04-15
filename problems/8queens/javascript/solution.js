'use strict';

var i;
var j;
var line;
var board = [];
var boardrow;
var queenCount = 0;
var invalid = false;

while (true) {
	line = readline();

	if (line === null) {
		break;
	}

	boardrow = [];
	for (i = 0; i < line.length; i++) {
		boardrow.push(line.charAt(i));
	}

	board.push(boardrow);
}

breakBoard:
for (i = 0; i < board.length; i++) {
	boardrow = board[i];
	for (j = 0; j < boardrow.length; j++) {
		if (boardrow[j] === '*') {
			queenCount++;
			if (checkQueen(i, j)) {
				invalid = true;
				break breakBoard;
			}
		}
	}
}

if (queenCount !== 8) {
	invalid = true;
}

print(invalid ? 'invalid' : 'valid');

function checkQueen(r, c) {
		// no need to check back as a previous queen would have already found a match
	return (
		checkEast(r, c) ||
		checkSouth(r, c) ||
		checkSouthEast(r, c) ||
		checkSouthWest(r, c)
	);
}

function checkEast(r, c) {
	var k;
	var row = board[r];

	for (k = c + 1; k < row.length; k++) {
		if (row[k] === '*') {
			return true;
		}
	}
	return false;
}

function checkSouth(r, c) {
	var k;

	for (k = r + 1; k < board.length; k++) {
		if (board[k][c] === '*') {
			return true;
		}
	}
	return false;
}

function checkSouthEast(r, c) {
	var row = r + 1;
	var col = c + 1;

	while (row < board.length) {
		if (board[row][col] === '*') {
			return true;
		}
		row++;
		col++;
	}
	return false;
}

function checkSouthWest(r, c) {
	var row = r + 1;
	var col = c - 1;

	while (row < board.length) {
		if (board[row][col] === '*') {
			return true;
		}
		row++;
		col--;
	}
	return false;
}
