/*
    1       I
    5       V 
    10      X
    50      L 
    100     C
    500     D
    1 000   M 
    
*/
function convertToRoman(number) {
	let str = number.toString().split("");
	let result = [];
	let var_1, var_5, var_10;
	let x = str.length;

	for (i in str) {
		if (x == 1) {
			var_1 = "I";
			var_5 = "V";
			var_10 = "X";
		}
		if (x == 2) {
			var_1 = "X";
			var_5 = "L";
			var_10 = "C";
		}
		if (x == 3) {
			var_1 = "C";
			var_5 = "D";
			var_10 = "M";
		}
		if (x == 4) {
			var_1 = "M";
		}
		x--;

		if (str[i] == 1) {
			result.push(var_1);
		}
		if (str[i] == 2) {
			result.push(var_1);
			result.push(var_1);
		}
		if (str[i] == 3) {
			result.push(var_1);
			result.push(var_1);
			result.push(var_1);
		}
		if (str[i] == 4) {
			result.push(var_1);
			result.push(var_5);
		}
		if (str[i] == 5) {
			result.push(var_5);
		}
		if (str[i] == 6) {
			result.push(var_5);
			result.push(var_1);
		}
		if (str[i] == 7) {
			result.push(var_5);
			result.push(var_1);
			result.push(var_1);
		}
		if (str[i] == 8) {
			result.push(var_5);
			result.push(var_1);
			result.push(var_1);
			result.push(var_1);
		}
		if (str[i] == 9) {
			result.push(var_1);
			result.push(var_10);
		}
		if (str[i] == 10) {
			result.push(var_10);
		}
		console.log(result);
	}
	return result.join("");
}

console.log(convertToRoman(798), "DCCXCVIII");
/*
	Test.assertEquals(convertToRoman(68), "LXVIII")
	Test.assertEquals(convertToRoman(798), "DCCXCVIII")

 */
