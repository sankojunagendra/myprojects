/*
* Write a function that calculates the sum of all numbers from 1 up to some number n.
*/
// O(n)
function calculateSum(num) {
    var counter = 0;
    for(var i = 0; i <= num; i++) {
        counter += i;
    }
    return counter;
};

console.log(calculateSum(4));

// Another solution
// O(1)
function calculateSum2(num) {
    return num * (num + 1) / 2;
};

console.log(calculateSum2(4));

// Another example
// O(n^2);
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
console.log(printAllPairs(5));

// O(n)
function logAtleastFive(n) {
    for (var i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
};
console.log(logAtleastFive(9));


//O(1)
function logAtMostFive(n) {
    for (var i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
};
console.log(logAtMostFive(9));

// Examples related to SpaceComplexity
// O(1)
function sum(arr) {
    var total = 0; // its using space
    for (var i = 0; i < arr.length; i++) { // i = 0; is using space
        total += arr[i]; 
    }
};

console.log(sum([1,2,3,4,5]));

// O(n)
function double(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

console.log(double([1,2,3]));