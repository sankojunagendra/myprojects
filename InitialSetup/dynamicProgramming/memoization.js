/**
 * Dynamic Programming
 */

// Fibonacci Series Without Dynamic Programming

function fib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(5));

// For Example, In the above solution

// fib(5)

// => return fib(4) + fib(3)
// now it calculates fib(4) first and then fib(3);

// fib(4) => fib(3) + fib(2);

// again it calculates fib(3) first and fib(2) next;
// fib(3) = fib(2) + fib(1) => 1 + 1 = 2;
// fib(4) = 2 + 1 => fib(4) = 3;

// fib(5) = 3 + fib(3);
// fib(3) = fib(2) + fib(1) => 2;
// so the final solution of fib(5) = 3 + 2 = 5;
// The problem with the above solution is, we are finding the same fibonacci series again and again for the same number.
// // The BIG O for above solution is O(2^n) which is worst than O(n^2).
// because if we need to find the fibonacci series for larger number then it might take a lot of time.


/**
 * Best Solution :- using MEMOIZATION
 * 
 * The best solution for the above problem is that, to store the value in the array and then retrieve the value when needed.
 * 
 */

function fibonacci(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var res = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fibonacci(5));
// The BIG O for above solution is O(n). and space complexity is worse.

// For better SpaceComplexity , We use Tabulated Version
// because if we search for larger number (10000), we will get Error saying Maximum Call stack exceeded.

// Tablulated Version
// 
function tabluatedFib(n) {
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for(let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(tabluatedFib(45));

// The BIG O for above solution is O(n). and space complexity O(n).