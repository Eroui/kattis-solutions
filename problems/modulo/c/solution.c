#include <stdio.h>

int main() {
	int input;
	int values[42] = {0};
	int count = 0;

	while(EOF != scanf("%d", &input)) {
		values[input % 42]++;
	}

	for (int i = 0; i < 42; i++) {
		if (values[i] > 0) {
			count++;
		}
	}

	printf("%d\n", count);
	
	return 0;
}
