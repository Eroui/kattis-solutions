#include <stdio.h>



int main() {
	int i;
	int j;
	int group_size;
	int outcome;
	int outcome_counts[] = {0, 0, 0, 0, 0, 0};

	if (1 != scanf("%d", &group_size)) {
		fprintf(stderr, "Error reading number from stdin.\n");
		return 1;
	}

	int outcomes[group_size];

	for (i = 0; i < group_size; i++) {
		if (1 != scanf("%d", &outcome)) {
			fprintf(stderr, "Error reading numbers from stdin.\n");
			return 1;
		}
		outcome_counts[outcome - 1]++;
		outcomes[i] = outcome;
	}

	for (i = 5; i >= 0; i--) {
		if (outcome_counts[i] == 1) {
			for (j = 0; j < group_size; j++) {
				if (outcomes[j] == i + 1) {
					printf("%d", j + 1);
					break;
				}
			}
			return 0;
		}
	}

	printf("none");

	return 0;
}