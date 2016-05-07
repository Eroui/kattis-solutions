#include <stdio.h>
#include <math.h>

#define EPSILON 0.00001

int main() {
	int ga1;
	int ga2;
	int gb1;
	int gb2;
	int ea1;
	int ea2;
	int eb1;
	int eb2;
	double evg;
	double eve;
	double prob;
	int i;

	if (4 != scanf("%d %d %d %d", &ga1, &gb1, &ga2, &gb2)) {
		fprintf(stderr, "Error reading Gunnar's dice from stdin.\n");
		return 1;
	}

	if (4 != scanf("%d %d %d %d", &ea1, &eb1, &ea2, &eb2)) {
		fprintf(stderr, "Error reading Emma's dice from stdin.\n");
		return 2;
	}

	evg = 0;
	prob = 1.0/(gb1 - ga1);
	for (i = ga1; i < gb1; i++) {
		evg += i * prob;
	}
	prob = 1.0/(gb2 - ga2);
	for (i = ga2; i < gb2; i++) {
		evg += i * prob;
	}

	eve = 0;
	prob = 1.0/(eb1 - ea1);
	for (i = ea1; i < eb1; i++) {
		eve += i * prob;
	}
	prob = 1.0/(eb2 - ea2);
	for (i = ea2; i < eb2; i++) {
		eve += i * prob;
	}

	if (fabs(evg - eve) < EPSILON) {
		printf("Tie\n");
	}
	else if (evg < eve) {
		printf("Emma\n");
	}
	else {
		printf("Gunnar\n");
	}

	return 0;
}
