/**
 * 
 */
function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 2));

// 2 * power(2, 1)
//          2 * power(2 * 0)
//                  1
// 2 * 2 * 1
// = 4.

/**
 * 
 */

function factorial(num) {
    if(num < 0) return 0;
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(3));

/**
 * 
 */

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1,2,3,4]));

//  1 * productOfArray([2,3])
//             2 * productOfArray([3])
//                     3 * productOfArray([])
//                                   1         
// 1 * 2 * 3 * 1 = 6;

/**
 * 
 */
function recursiveRange(num) {
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}
console.log(recursiveRange(3));

/**
 * Fibonacci sequence is the sequence of whole numbers which starts with 1 and 1
 * where every number is thereafter is equal to the sum of the previous two numbers
 */
// function fib(num) {

//     return 
//     // return nth number in Fibonacci sequence
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(4));

/**
 * 
 */
function reverse(str) {
    if(str.length === 1) return str;
    
     // return new str in reverse
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("olleh"));

// reverse("lleh")          + o
//  reverse("leh") +    l
// reverse("eh") + l
// reverse("h") + e
// h 

// hello 


//const newStr = 'thequickbrownfoxjumpsoverthelazydogifthedogreactedwasitreallylazy';
//const splitNewStr = newStr.split();

/**
 * recursive function with callback
 */
function someRecursive(arr, callback) {
    if(arr.length === 0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}
// callback function
function isOdd(val) {
    return val % 2 !== 0;
};

console.log(someRecursive([2,4,6,8,10,12,14], isOdd));