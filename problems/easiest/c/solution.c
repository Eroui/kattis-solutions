#include <stdio.h>
#include <stdbool.h>

int sumDigits(int);

int main() {
	int number;
	int numberSum;
	int p;
	bool first = true;

	while (true) {
		if (1 != scanf("%d", &number)) {
			fprintf(stderr, "Error reading number from stdin.\n");
			return 1;
		}

		if (number == 0) {
			break;
		}

		if (!first) {
			printf("\n");
		}
		first = false;

		p = 11;
		numberSum = sumDigits(number);

		while(numberSum != sumDigits(number * p)) {
			p++;
		}
		printf("%d", p);
	}
}

int sumDigits(int number) {
	int sum = 0;
	do {
		sum += number % 10;
		number = number / 10;
	}
	while (number > 0);
	return sum;
}

