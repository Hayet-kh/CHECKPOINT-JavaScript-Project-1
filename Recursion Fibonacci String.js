function fibStr(n, str) {
	if (n == 0) {
		return str[0];
	} else if (n == 1) {
		return str[1];
	} else return fibStr(n - 2, str) + fibStr(n - 1, str);
}

console.log(fibStr(6, ["j", "h"]));

/*
    fibStr(2, ["j", "h"]) ➞ "j, h"
    fibStr(3, ["j", "h"]) ➞ "j, h, hj"
    fibStr(4, ["j", "h"]) ➞ "j, h, hj, hjh"
    fibStr(5, ["j", "h"]) ➞ "j, h, hj, hjh, hjhhj"
    fibStr(6, ["j", "h"]) ➞ "j, h, hj, hjh, hjhhj, hjhhjhjh"


    fibstr2 = "j, h"
    fibstr3 = "j, h, hj"
    firstr 5 = fibstr3 + fibstr4 = 


    fibstr 0 = j
    fibstr 1 = h
    fibstr 2 = fibstr0 concat fibstr1
    fibstr 3 = fibstr1 concat fibstr2

*/
