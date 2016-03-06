#include <stdio.h>
#include <string.h>

int main() {

	char *line = NULL;
	size_t len = 0;
	int length;
	int days = 0;
	char per[] = {'P', 'E', 'R'};

	if ((length = getline(&line, &len, stdin)) != -1) {
		// length -1 to remove newline
		for (int i = 0; i < length - 1; i++) {
			if (line[i] != per[i % 3]) {
				days++;
			}
		}
	}

	printf("%d\n", days);

	return 0;
}
