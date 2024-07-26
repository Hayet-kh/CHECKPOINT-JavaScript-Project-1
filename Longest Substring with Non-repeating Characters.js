function longestNonrepeatingSubstring(str) {
	let substr = str[0];
	str = str.substring(1, str.length);
	let arr = [];

	for (str_char of str) {
		let j = 0;
		let repeating_substring = false;
		while (j < substr.length && repeating_substring == false) {
			str_char != substr[j] ? j++ : (repeating_substring = true);
		}
		if (repeating_substring == false && j == substr.length) {
			substr = substr.concat(str_char);
		} else {
			arr.push(substr);
			substr = str_char;
		}
	}
	let i = 1;
	let result = arr[0];
	console.log(arr);
	while (i < arr.length) {
		if (arr[i].length > result.length) {
			result = arr[i];
		}
		i++;
	}

	return result;
}

console.log(longestNonrepeatingSubstring("kjlmjsdeee"));

/*
		Test.assertEquals(longestNonrepeatingSubstring("aaccddeeffb"), "ac")
		Test.assertEquals(longestNonrepeatingSubstring("ccdddcccc"), "cd")
	Test.assertEquals(longestNonrepeatingSubstring("abddefgh"), "defgh")
		Test.assertEquals(longestNonrepeatingSubstring("abddebcc"), "debc")
		Test.assertEquals(longestNonrepeatingSubstring("xyxxyzyzy"), "xyz")
	Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdeee"), "lmjsde")
	Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfew"), "lmjsdfew")
	Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfewii"), "lmjsdfewi")
	Test.assertEquals(longestNonrepeatingSubstring("kjlmjjiiiidfewii"), "idfew")
*/
