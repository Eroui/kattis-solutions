#include <stdio.h>
#include <stdbool.h>

int checkPiece(char *board, int r, int c) {
	int i;
	int j;
	int count = 0;

	// check down
	if (r + 2 < 7) {
		if (board[(r + 1) * 7 + c] == 'o' && board[(r + 2) * 7 + c] == '.') {
			count++;
		}
	}

	// check up
	if (r - 2 >= 0) {
		if (board[(r - 1) * 7 + c] == 'o' && board[(r - 2) * 7 + c] == '.') {
			count++;
		}
	}

	// check right
	if (c + 2 < 7) {
		if (board[(r * 7) + (c + 1)] == 'o' && board[(r * 7) + (c + 2)] == '.') {
			count++;
		}
	}

	// check left
	if (c - 2 >= 0) {
		if (board[(r * 7) + (c - 1)] == 'o' && board[(r * 7) + (c - 2)] == '.') {
			count++;
		}
	}

	return count;
}

int main() {
	int i;
	int j;
	char input;
	int count = 0;
	char board[49];

	for (i = 0; i < 7; i++) {
		for (j = 0; j < 7; j++) {
			if (1 != scanf("%c", &input)) {
				fprintf(stderr, "Error reading board from stdin.\n");
			}
			board[(i * 7) + j] = input;
		}
		// skip newline
		if (1 != scanf("%c", &input)) {
			fprintf(stderr, "Error reading board from stdin.\n");
		}
	}

	for (i = 0; i < 7; i++) {
		for (j = 0; j < 7; j++) {
			if (board[(i * 7) + j] != ' ' && board[(i * 7) + j] != '.') {
				count += checkPiece(board, i, j);
			}
		}
	}

	fprintf(stdout, "%d\n", count);

	return 0;
}
