#include <stdio.h>

int main() {
	
	int numCases;
	int number;

	if (1 != scanf("%d\n", &numCases)) {
		fprintf(stderr, "Error reading number of cases from stdin.\n");
		return 1;
	}

	for (int i = 0; i < numCases; i++) {
		if (1 != scanf("%d\n", &number)) {
			fprintf(stderr, "Error reading data from stdin.\n");
			return 1;
		}

		if (number % 2 == 0) {
			printf("%d is even\n", number);
		} else {
			printf("%d is odd\n", number);
		}

	}
	return 0;
}
