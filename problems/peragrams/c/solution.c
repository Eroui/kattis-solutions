#include <stdio.h>
#include <string.h>

int main() {
	int i;
	char *input = NULL;
	int length;
	size_t len = 0;
	char letters[26] = {0};
	int chars_to_remove = 0;

	if ((length = getline(&input, &len, stdin)) == -1) {
		return 1;
	}

	// count characters
	for (i = 0; i < length; i++) {
		letters[input[i] - 'a']++;
	}

	// check for odd counts
	for (i = 0; i < 26; i++) {
		//printf("C: %d %d\n", letters[i], letters[i] % 2);
		if ((letters[i] % 2) == 1) {
			chars_to_remove++;
		}
	}

	if (chars_to_remove > 0) {
		chars_to_remove--;
	}

	// subtract one because we can allow one odd character
	printf("%d", chars_to_remove);

	return 0;
}