#include <stdio.h>

int main() {
	int i;
	int capacity = 0;
	int max_capacity;
	int num_stops;
	int left;
	int entered;
	int stay;

	if (2 != scanf("%d %d", &max_capacity, &num_stops)) {
		fprintf(stderr, "Error reading numbers from stdin.\n");
		return 1;
	}

	for (i = 0; i < num_stops; i++) {
		if (3 != scanf("%d %d %d", &left, &entered, &stay)) {
			fprintf(stderr, "Error reading numbers from stdin.\n");
			return 1;
		}

		// check left possible
		if (left > capacity) {
			printf("impossible");
			return 0;
		}

		capacity -= left;

		// check entered possible
		if (entered > (max_capacity - capacity)) {
			printf("impossible");
			return 0;
		}

		capacity += entered;

		if (stay > 0 && capacity < max_capacity) {
			printf("impossible");
			return 0;
		}
	}

	if (capacity != 0) {
		printf("impossible");
		return 0;
	}

	printf("possible");
	return 0;
}