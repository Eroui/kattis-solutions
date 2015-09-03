#include <stdio.h>
#include <stdbool.h>

int main() {
	int gaurdFirst = false;
	int numerator;
	int denominator;
	int reduced_numerator;
	int whole_number;

	while (1) {

		if (2 != scanf("%d %d", &numerator, &denominator)) {
			fprintf(stderr, "Error reading numbers from stdin.\n");
			return 1;
		}

		if (numerator == 0 && denominator == 0) {
			break;
		}

		/* do not print newline on first entry */
		if (gaurdFirst) {
			printf("\n");
		}
		else {
			gaurdFirst = true;
		}

		whole_number = (int)(numerator / denominator);
		reduced_numerator = numerator - (whole_number * denominator);

		printf("%d %d / %d", whole_number, reduced_numerator, denominator);
	}
}

