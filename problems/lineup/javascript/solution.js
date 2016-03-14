var lineCount = parseInt(readline(), 10);
var i;
var line;
var previousLine;
var isIncreasing;
var isNeither = false;

previousLine = readline();
line = readline();

isIncreasing = (line > previousLine);

for (i = 2; i < lineCount; i++) {
	line = readline();

	if (isIncreasing) {
		if (line > previousLine) {
			continue;
		}
		isNeither = true;
		break;
	}
	else {
		if (line < previousLine) {
			continue;
		}
		isNeither = true;
	}

	previousLine = line;
}

if (isNeither) {
	print("NEITHER");
}
else if (isIncreasing) {
	print("INCREASING");
}
else {
	print("DECREASING");
}
