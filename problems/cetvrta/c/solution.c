#include <stdio.h>
#include <stdbool.h>

int main() {
	int x;
	int y;
	int i;
	int pointsX[3];
	int pointsY[3];

	for (i = 0; i < 3; i++) {
		if (2 != scanf("%d %d", &pointsX[i], &pointsY[i])) {
			fprintf(stderr, "Error reading numbers from stdin.\n");
		}
	}

	if (pointsX[0] == pointsX[1]) {
		x = pointsX[2];
	}
	else if (pointsX[0] == pointsX[2]) {
		x = pointsX[1];
	}
	else {
		x = pointsX[0];
	}

	if (pointsY[0] == pointsY[1]) {
		y = pointsY[2];
	}
	else if (pointsY[0] == pointsY[2]) {
		y = pointsY[1];
	}
	else {
		y = pointsY[0];
	}

	printf("%d %d\n", x, y);

	return 0;
}
