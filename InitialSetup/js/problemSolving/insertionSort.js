/**
 * Insertion Sort
 */

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([5,9,2,4,3,1,7,6,8]));

//Case-1 
// i = 1, currentValue = 9, j = i - 1 => j = 0 , arr[j] = 5
// condition :- j = 0, true && false

// arr[j + 1] => arr[0 + 1] => arr[1] = 9;

// output = [5,9,2,4,3,1,7,6,8];



//Case-2 
// i = 2, currentValue = 2, j = i - 1 => j = 1 , arr[j] = 9
// condition :- j = 1, true && true
// arr[j + 1] = arr[j]
// => arr[2] = 9; // output = [5,9,9,4,3,1,7,6,8]

// j = 0 => true && true
// arr[1] = 5;  // output = [5,5,9,4,3,1,7,6,8]

// j = -1 =>false && false

// arr[-1+1] = 2;
// arr[0] = 2; // output = output = [2,5,9,4,3,1,7,6,8]


//same thing continues untill the array is sorted.


/**
 * BIG O of selectionsort
 * 
 * bestcase - O(n)
 * worst && average case - O(n**2)
 * 
 * Spacecomplexity - O(1) 
 * 
 */







