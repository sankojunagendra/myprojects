/**
 * Selection Sort is similar to Bubble sort,but instead of first placing large values into sorted position,it
 * places small values into sorted position.
 */

function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var lowest = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) { 
                lowest = j;
            };
        }
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([5,9,2,4,3,1,7,6,8]));

/**
 * BIG O of Selection sort
 * 
 * It's O(n**2)
 * It's something better than Bubble sort as selection sort only swaps one time for one loop.
 */






























