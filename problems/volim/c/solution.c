#include <stdio.h>

#define GAME_TIME 210

int main() {
	int num_questions;
	int player;
	int time;
	int total_time = 0;
	char response;
	int totalMinutes;
	int i;

	if (1 != scanf("%d\n", &player)) {
		fprintf(stderr, "Error reading data from stdin.\n");
		return 1;
	}

	if (1 != scanf("%d\n", &num_questions)) {
		fprintf(stderr, "Error reading data from stdin.\n");
		return 1;
	}

	for (i = 0; i < num_questions; i++) {

		if (2 != scanf("%d %c\n", &time, &response)) {
			fprintf(stderr, "Error reading data from stdin.\n");
			return 1;
		}

		total_time += time;

		if (total_time > GAME_TIME) {
			break;
		}

		if (response == 'T') {
			player++;
			if (player > 8) {
				player = 1;
			}
		}

	}

	printf("%d\n", player);
}
