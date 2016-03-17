#include <stdio.h>
#include <math.h>

int main() {
	
	int height;
	int angle;

	if (2 != scanf("%d %d\n", &height, &angle)) {
		fprintf(stderr, "Error reading number of cases from stdin.\n");
		return 1;
	}

	printf("%d\n", (int)ceil(height / sin(angle * (M_PI / 180))));

	return 0;
}
