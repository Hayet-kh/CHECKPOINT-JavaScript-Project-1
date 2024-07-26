/*Exact upper bound: An exact upper bound in this context means that x is the smallest number that is greater than or equal to 𝑛!
In other words, x=n!+1.*/

/*Recursive function: A recursive function is a function that calls itself in order to solve a problem.*/

function isExact(n) {
    let fact=1;
    let i=1;
    /*for (let i=1; fact<n; i++) {
        fact *= i;
        console.log(fact);
    }*/
        while(fact <= n) {
            fact *= i;
            if (fact === n) {
                console.log([n, i]) ;
            }
            i++;
        }

	return isExact(fact)
}
isExact(2); // [2, 2]
isExact(6); // [6, 3]
isExact(24); // [24, 4]
isExact(120); // [120, 5]
isExact(5040); // [5040, 7]
isExact(40320); // [40320, 8]
isExact(3628800); // [3628800, 10]
isExact(20922789888000); // [20922789888000, 16]
isExact(125); // "Not exact!"
isExact(721); // "Not exact!"
isExact(1024); // "Not exact!"
isExact(41845579776000); // "Not exact!"

//Test.assertSimilar(isExact(2), [2, 2])
//Test.assertSimilar(isExact(6), [6, 3])
//Test.assertSimilar(isExact(24), [24, 4])
//Test.assertSimilar(isExact(120), [120, 5])
//Test.assertSimilar(isExact(5040), [5040, 7])
//Test.assertSimilar(isExact(40320), [40320, 8])
//Test.assertSimilar(isExact(3628800), [3628800, 10])
//Test.assertSimilar(isExact(20922789888000), [20922789888000, 16])
//Test.assertEquals(isExact(125), "Not exact!")
//Test.assertEquals(isExact(721), "Not exact!")
//Test.assertEquals(isExact(1024), "Not exact!")
//Test.assertEquals(isExact(41845579776000), "Not exact!")