#include <stdio.h>

int main() {
	int numValues;
	int speed;
	int rollingTime;
	int previousTime;
	int distanceTotal;

	while (1) {

		if (1 != scanf("%d", &numValues)) {
			fprintf(stderr, "Error reading number of values from stdin.\n");
			return 1;
		}

		if (numValues == -1) {
			break;
		}

		previousTime = 0;
		distanceTotal = 0;

		for (int i = 0; i < numValues; i++) {
			if (2 != scanf("%d %d", &speed, &rollingTime)) {
				fprintf(stderr, "Error reading values from stdin.\n");
				return 2;
			}

			distanceTotal += (speed * (rollingTime - previousTime));
			previousTime = rollingTime;
		}

		printf("%d miles\n", distanceTotal);
	}
}
