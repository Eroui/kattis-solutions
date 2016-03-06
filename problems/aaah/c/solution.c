#include <stdio.h>
#include <string.h>

int main() {

	char * ableLine = NULL;
	char * expectedLine = NULL;
	size_t len = 0;

	if (getline(&ableLine, &len, stdin) == -1) {
		return 1;
	}
	if (getline(&expectedLine, &len, stdin) == -1) {
		return 1;
	}

	if (strlen(ableLine) >= strlen(expectedLine)) {
		printf("go\n");
	} else {
		printf("no\n");
	}
	return 0;
}
