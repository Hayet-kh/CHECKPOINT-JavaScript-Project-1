function fib(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else return fib(n - 2) + fib(n - 1);
}

console.log(fib(2));
/*
    F(0) = 0
    F(1) = 1
    F(n) = F(n-2) + F(n-1)
*/
