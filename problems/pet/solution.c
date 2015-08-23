#include <stdio.h>

int main() {
	int grade;
	int total;
	int i;
	int j;

	int max_grade = 0;
	int max_contestant_number = 0;

	for (i = 0; i < 5; i++) {
		total = 0;
		for (j = 0; j < 4; j++) {
			if (1 != scanf("%d", &grade)) {
				fprintf(stderr, "Error reading grades from stdin.\n");
				return 1;
			}
			total += grade;
		}
		if (total > max_grade) {
			max_grade = total;
			max_contestant_number = i + 1;
		}
	}
	printf("%d %d", max_contestant_number, max_grade);
}
