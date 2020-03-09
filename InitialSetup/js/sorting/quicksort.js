/**
 * Quick sort
 */
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let pivot = arr[start];
    let swapIdx = start;
    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            if(swapIdx !== i) {
                swap(arr, swapIdx, i)
            }
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
   if(left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        
        //left
        quickSort(arr, left, pivotIndex - 1);

        // right
        quickSort(arr, pivotIndex + 1, right);
   }
   return arr;
}

quickSort([5,2,1,8,4,7,6,3]);


// left = 0, right = 7
// pivotIndex = 4
// arr = [3,2,1,4,5,7,6,8];
// left side
// left = 0, right = pivotIndex - 1 => (4)
//  quicksort([3,2,1,4],left, right)
//         pivotIndex => pivotHelper(arr, left, right) pivot = 3;
//                      swapIndex=0;
//                      loop start => if 3 > 2 => swapIndex = 1;
                        // if 3 > 1 => swapIndex = 2;
                        // if 3 > 4 => no.
                        // loop ends.
                        // swap(arr, left, swapIndex) => [1,2,3,4]
                        // return swapIndex => return 2;
//     pivotIndex = 2
//     arr = [1,2,3,4]

//      rightside
//      left = pivotIndex + 1 = 5, right = 7;
//       quicksort([7,6,8], left=5, right = 7)
//                          pivotIndex = pivotHelper([7,6,8],start = 5, end = 7)
//                                        => pivot = 7,
//                                          swapIndex = 0;
//                                          loop => if(7 > 6) => swapIndex= 1 
//                                                  swap.
//                                                  arr= [6,7,8]      


/**
 * BIG O of Quicksort
 * Best and Average Cases - O(n log n)
 * Worst Case - O(n**2);
 * spacecomplexity = O(n log n);
 */