	#include <stdio.h>

int main() {
	int costs[] = {0, 0, 0};
	int min = 101;
	int max = 1;
	int inRange;
	int cost = 0;

	int arrival[] = {0, 0, 0};
	int departure[] = {0 ,0, 0};

	if (3 != scanf("%d %d %d\n", &costs[0], &costs[1], &costs[2])) {
		fprintf(stderr, "Error reading numbers from stdin.\n");
		return 1;
	}

	for (int i = 0; i < 3; i++) {
		if (2 != scanf("%d %d\n", &arrival[i], &departure[i])) {
			fprintf(stderr, "Error reading numbers from stdin.\n");
			return 2;
		}

		if (arrival[i] < min) {
			min = arrival[i];
		}

		if (departure[i] > max) {
			max = departure[i];
		}
	}

	for (int i = min; i <= max; i++) {
		inRange = 0;
		
		if (i >= arrival[0] && i < departure[0]) {
			inRange++;
		}
		
		if (i >= arrival[1] && i < departure[1]) {
			inRange++;
		}
		
		if (i >= arrival[2] && i < departure[2]) {
			inRange++;
		}
		
		if (inRange != 0) {
			cost += costs[inRange - 1] * inRange;
		}
	}

	printf("%d\n", cost);
	return 0;
}
