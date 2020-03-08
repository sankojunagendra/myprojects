/**
 * 1. Understanding the problem
 * 2. Explore concrete Examples
 * 3. Break It Down
 * 4. Solve / Simplify
 * 5. Look Back & Refactor
 */

/**
 * Problem - 1 :-
 * Write a function which takes in a string and returns counts of each character in the string
 */

// function charCount (str) {
    
//     // if str length is zero return;
//     if(str.length < 1) return;

//     // make object to return at the end
//     var result = {};
    
//     // loop over the string, for each character
//     for(var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//        // accept only lowercase alphanumeric characters in the string and trim the white spaces
//        if(/[a-z0-9]/.test(char)) {
//             // if a char is a key in object,add one to count
//             if (result[char] > 0) {
//                 result[char]++;
//             } 
//             //if a char is not in object, add it and set to one
//             else {
//                 result[char] = 1;
//             }
//         }
//     }
//     // return object at the end
//     console.log(result);
//     return result;
// }
// charCount('ganguly');

// Refactored version

function charCount(str) {
    var results = {};
    for (var char of str) {
        // if(/[a-z0-9]/.test(char)) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            // results[char] = ++results[char] || 1;
             results[char] > 0 ? results[char]++ : results[char] = 1;
        }
    }
    console.log(results);
    return results;
};
charCount('g a n ga mn  2 1 5');

// However there is a better way of checking isAlphaNumeric other using regular expression (regex)
// it seems that the non regular expression is faster and regex is 55% slower when used again and again
// Here is a solution finding whether the string is alphanumeric by using their charCodes.

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if( !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
    }
    return true;
}












