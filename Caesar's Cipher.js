function caesarCipher(s, k) {
	let alph_min = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let alph_maj = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	let str = s.split("");
	for (i in str) {
		let j = 0;
		while (
			str[i] != alph_min[j] &&
			j < alph_min.length &&
			str[i] != alph_maj[j] &&
			j < alph_maj.length
		) {
			j++;
		}
		let n = j + k;
		if (str[i] == alph_min[j]) {
			if (j + k <= 26) {
				str[i] = alph_min[j + k];
			} else {
				while (n >= 26) {
					n -= 26;
				}
				str[i] = alph_min[n];
			}
		} else if (str[i] == alph_maj[j]) {
			if (j + k <= 26) {
				str[i] = alph_maj[j + k];
			} else {
				while (n >= 26) {
					n -= 26;
				}
				str[i] = alph_maj[n];
			}
		}
	}

	return str.join("");
}
