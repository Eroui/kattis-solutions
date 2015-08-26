#include <stdio.h>
#include <string.h>

int main() {

	char * line = NULL;
	size_t len = 0;
	int i;

	if (getline(&line, &len, stdin) == -1) {
		return 1;
	}

	for (i = 0; i < len; i++) {
		if (line[i] == '\0') {
			break;
		}
		printf("%c", line[i]);
		if (
			   line[i] == 'a'
			|| line[i] == 'e'
			|| line[i] == 'i'
			|| line[i] == 'o'
			|| line[i] == 'u'
		) {
			i += 2;
		}
	}
	return 0;
}
