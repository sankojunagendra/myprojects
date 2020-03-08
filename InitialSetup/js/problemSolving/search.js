// let names = ["Ganguly", "Sachin", "Sehwag", "Yuvraj", "Kaif", "raina", "watson", "bhuvi", "bumrah", "yashwanth"];

// var obj = {};
// for (const name of names) {  // O(n)
//     console.log(name);
//     obj[name] > 0 ? obj[name]++ : obj[name] = 1;
// }

// var hasProperty = obj.hasOwnProperty('Ganguly') // O(1)
// console.log(obj);
// console.log(hasProperty);

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}
console.log("linearSearch");
console.log(linearSearch([1,2,3,4,5], 2));
console.log("*************");

// Binary Search

function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    var sortedArray = [];

    // converting elements in lowercase in case of strings
    for (let char of arr) {
            char = char.toLowerCase();
            sortedArray.push(char);        
    };
    // the above code lowerCase conversion code should be removed in case of number dataType in array 
    while(sortedArray[middle] !== val && start <= end) {
        if (val > sortedArray[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor(( start + end) / 2);
    }
    return sortedArray[middle] === val ? middle : -1;
}


// console.log(binarySearch([1,2,3,4,5], 2));
// console.log("It should return -1");
// console.log(binarySearch([1,2,3,4,5],9));
console.log(binarySearch(["Ant","Ball","Car","Dog","Elephant","Fox","Goat","Himalaya","Icecream","Jack","Kalyan","Lion"], "lion"));
console.log("***********************");

/**
 * Time complexities for Binary Search
 * 
 * Worst & Average Case : O(log n) => because if n = 16, then it performs 4 operations which implies log 16 = 4 => 2**4 = 16.
 * Best Case : O(1)
 * 
 * But binary search only works on a sorted array.
 */


/**
* find the count of shorter string in a longer string
*/

function stringSearch(longStr, shortStr) {
    var count = 0;
    var actualLength = longStr.length - shortStr.length;
    for(var i = 0; i <= actualLength; i++) {
        for(var j = 0; j < shortStr.length; j++){
           if (shortStr[j] !== longStr[i + j]) break;
           if(j === shortStr.length - 1) count++;
        }
    }
    return count;
};

console.log(stringSearch("helloworldholl", "hell"));









































