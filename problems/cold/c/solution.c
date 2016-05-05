#include <stdio.h>

int main() {
	
	int numTemps;
	int temp;
	int totalTemps = 0;

	if (1 != scanf("%d\n", &numTemps)) {
		fprintf(stderr, "Error reading number of temps from stdin.\n");
		return 1;
	}

	for (int i = 0; i < numTemps; i++) {
		if (1 != scanf("%d\n", &temp)) {
			fprintf(stderr, "Error reading temp from stdin.\n");
			return 1;
		}

		if (temp < 0) {
			totalTemps++;
		}

	}

	printf("%d\n", totalTemps);
	return 0;
}
