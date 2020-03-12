/**
 * Hash Table / Hash Map
 */

/**
 * Hash Tables are used to store key-value pairs.
 * They are like arrays, but the keys are not ordered.
 * Unlike arrays, hash tables are fast for all of the following operations :-
 *                                                                          1. finding values.
 *                                                                          2. adding new Values.
 *                                                                          3. removing values.
 * In JS, Objects are basically hash tables
 */

/**
 * To implement a hash table, we'll be using an array.
 * 
 * In order to look up values by key, we need a way to "convert keys into valid array indices".
 * 
 * A function that performs this task is called a "hash function".
 */

/**
 * What makes a good hash function?
 * 
 * 1. Fast (constant time)
 * 2. Doesn't cluster outputs at specifi indices, but distributes uniformly
 * 3. Deterministic (same input yields same output)
 * 
 */

/**
 * Simple Hash Example
 * Works on strings only :
 * 
 *
 */
function hash(key, arrayLen) {
    let total = 0;
    
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        console.log(value);
        total = (total + value) % arrayLen;        
    }
    return total;
}
console.log(hash("pink",10));
console.log("*********************");

/**
 * The problem with the above hash function is -> it's not constant time.
 * Could be a little more random.
 */

function someAlternateHash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(someAlternateHash("pink",13));
console.log(someAlternateHash("hello",13));
console.log(someAlternateHash("hi",13));
console.log(someAlternateHash("cyan",13));
// In this alternate function we are looping to max 100 characters so its sort of constant time.
// and slso we are adding a prime number and we want our array length to be a prime number as well just to decrease the number
// of collisions to make our data more distributed.

// If we log to the console, we can see that both "cyan" and "pink" are having the same index.
// So how can we say there is a collision.

/**
 * Dealing with Collisions:-
 * 
 * Even with a large array and a great hash function, collisions are inevitable(common).
 * 
 * There are many strategies for dealing with collisions, but we'll focus on two:
 * 
 * 1. Separate Chaining
 * 2. Linear Probing
 */

/**
 * Separate Chaining:-
 * 
 * With separate chaining, at each index in our array we store values using a more sophisticated data structure
 * (e.g. an array or a linked list).
 * 
 * This allows us to store multiple key-value pairs at the same index.
 * 
 */

/**
 * Linear Probing:-
 * 
 * With Linear Probing, when we find a collision, we search through the array to find the next empty slot.
 * 
 * Unlike with separate chaining, this allows us to store a single key-value at each index.
 */

/**
 * BIG O
 *  Average Case:-
 * 
 * insert - O(1)
 * Deletion - O(1)
 * Access: O(1)
 */