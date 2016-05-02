#include <stdio.h>
#include <math.h>

int main() {

	unsigned long area;

	if (1 != scanf("%lu", &area)) {
		fprintf(stderr, "Error reading area from stdin.\n");
		return 1;
	}

	printf("%0.16f\n", sqrt(area) * 4);
}
