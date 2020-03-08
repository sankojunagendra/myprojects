let names = ["Ganguly", "Sachin", "Sehwag", "Yuvraj", "Kaif"];

/**
 * BIG O of Arrays
 * 
 * Insertion - It depends
 * Removal - It depends
 * Searching - O(n)
 * Access - O(1)
 */

// Example of accessing elements in an array
// The BIG O for accessing is constant because if we know the index then it takes same time to retrieve the data
console.log(names[0]); // returns "Ganguly"

/**
 * Insertion :-
 * There are two ways for inserting an element in an array.
 * Array.push() && Array.unshift()
 * BIG O for Array.push() is O(1) => because it adds the element to the end of the array and it takes constant time
 * BIG O for Array.unshift() is O(n) => because it adds the element to the beginning of the array and the index of all the elements will change
 * Means it has to change the complete array(indexes will change)
 */

 /**
  * Removal :-
  * Array.pop() -> removes the last element of an array => BIG O is O(1)
  * Array.shift() -> removes the first element of an array => BIG O is O(n)
  */

  /**
   * BIG O of Array Methods
   * Array.push() -> O(1)
   * Array.pop() -> O(1)
   * Array.unshift() -> O(n)
   * Array.shift() -> O(n)
   * Array.concat() -> O(n)
   * Array.slice() -> O(n)
   * Array.splice() -> O(n)
   * Array.sort() -> O(n * log n)
   * forEach/map/filter/reduce -> O(n)
   */
    
    






















