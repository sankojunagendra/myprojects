let instructor = {
    firstName : "Jack",
    isInstructor : true,
    favouriteNumbers : [1,2,3,4,5]
}

// BIG O of Objects
/*
* insertion - O(1)
  removal - O(1)
  searching - O(n) => searching the required value in the object
  access - O(1)
*/

/*
* BIG O of Object Methods
    Object.keys - O(n)
    Object.values - O(n)
    Object.entries - O(n)
    Object.hasOwnProperty - O(1)
*/

// Examples using Object Builtin Methods
/*
* Object.keys() => returns the properties(or) keys of an object.
*/
var objectKeys = Object.keys(instructor);
console.log(objectKeys);

/*
* Object.entries() => returns the properties(or) keys with values of an object.
*/
var objectEntries = Object.entries(instructor);
console.log(objectEntries);

/*
* Object.hasOwnProperty('key') => returns true if that key exists in an object
*/
console.log(instructor.hasOwnProperty('firstName'));

/*
* Object.values() => returns all the values
*/

console.log(Object.values(instructor));


















