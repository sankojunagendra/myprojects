/**
 * Recursive Function
 * 
 * The two essential parts of a recursive function are :
 *  1. BaseCase
 *  2. Different Input
 */

// Without Recursion

function countDown(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
};

console.log(countDown(5));

console.log("****************************");

console.log("Recursion Functions");

// Using Recursion

function recursionCountDown(num) {
    // Base Case
    if(num <= 0) return;
    console.log(num);
    num--;
    recursionCountDown(num); // Different Input (or) also called as recursive call
}; 

recursionCountDown(5);
console.log("****************************");

// sumRange

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3));

console.log("****************************");

// Factorial

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));


console.log("****************************");

// Helper Method Recursion

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) return;
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));


console.log("****************************");

// Pure Recursion Method

function pureRecursion(arr) {
    let newArr = [];

    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(pureRecursion(arr.slice(1)));
    return newArr;
}

console.log(pureRecursion([1,2,3,4,5,6,7,8,9]));


/**
 * Pure Recursion Tips
 * 
 * For Arrays, we need to use methods like slice, the spread operator,and concat that make
 * copies of arrays so we don't mutate them.
 * 
 * As Strings are immutable, we need to use methods like slice, substr or substring to make
 * copies of strings.
 * 
 * To make copies of objects, we need to use Object.assign, or the spread operator.
 */