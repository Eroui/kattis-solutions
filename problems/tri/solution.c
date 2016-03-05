#include <stdio.h>

int main() {
	int numA;
	int numB;
	int numC;
	char opAB = '=';
	char opBC = '=';

	if (3 != scanf("%d %d %d", &numA, &numB, &numC)) {
		fprintf(stderr, "Error reading numbers from stdin.\n");
		return 1;
	}

	if (numA + numB == numC) {
		opAB = '+';
	}
	else if (numA - numB == numC) {
		opAB = '-';
	}
	else if (numA * numB == numC) {
		opAB = '*';
	}
	else if (numA / numB == numC) {
		opAB = '/';
	}

	else if (numB + numC == numA) {
		opBC = '+';
	}
	else if (numB - numC == numA) {
		opBC = '-';
	}
	else if (numB * numC == numA) {
		opBC = '*';
	}
	else if (numB / numC == numA) {
		opBC = '/';
	}

	printf("%d%c%d%c%d\n", numA, opAB, numB, opBC, numC);
}
