#include <stdio.h>

int main() {
	int presses;

	int num_a = 1;
	int num_b = 0;
	int tmp_a;

	int i;

	if (1 != scanf("%d", &presses)) {
		fprintf(stderr, "Error reading presses from stdin.\n");
		return 1;
	}

	for (i = 0; i < presses; i++) {
		tmp_a = num_a;
		num_a = num_b;
		num_b = tmp_a + num_b;
	}

	printf("%d %d\n", num_a, num_b);
}
