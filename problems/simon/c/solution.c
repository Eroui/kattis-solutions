#include <stdio.h>
#include <string.h>

const char SIMON[] = "simon says";
const int SIMON_LENGTH = 10;

int main() {

	char *line = NULL;
	size_t len = 0;
	int length;
	char *substring;

	// skip leading number
	if ((length = getline(&line, &len, stdin)) == -1) {
		return 1;
	}

	while ((length = getline(&line, &len, stdin)) != -1) {
		if (strncmp(SIMON, line, SIMON_LENGTH) == 0) {
			printf("%s", &(line[SIMON_LENGTH + 1]));
		} else {
			printf("\n");
		}
	}

	return 0;
}
