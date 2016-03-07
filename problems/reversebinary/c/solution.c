#include <stdio.h>

int main() {
	unsigned int num;
	int index = 30;
	int start;
	int result = 0;
	int digit;
	int tmp;

	if (1 != scanf("%d", &num)) {
		fprintf(stderr, "Error reading number from stdin.\n");
		return 1;
	}
	while (index >=0) {
		digit = 1 << index;
		tmp = (num & digit) == digit;
		if (tmp != 0) {
			break;
		}
		index--;
	}
	start = index;
	while (index >= 0) {
		digit = 1 << index;
		if ((num & digit) == digit) {
			result |= 1 << (start - index);
		}
		index--;
	}
	printf("%d\n", result);
}

