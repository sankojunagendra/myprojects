// /**
//  * Merge Sort
//  */
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    // Break up the array into halves until we have arrays that are empty or have one element
    let middleValue = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middleValue));
    let right = mergeSort(arr.slice(middleValue));
    return merge(left, right);
}
console.log(mergeSort([9,5,6,3,2,1,8,4,7]));

// calculations behind code
// middlevalue = 4;
// left = mergeSort(arr.slice(0, 4));
// left = mergeSort([9,5,6,3]);
//              // middleValue1 = 2
//               //  left1 = mergeSort(arr.slice(0, 2)) =>mergeSort([9,5]) 
//               // left 1 = [5,9]                          // middleValue2 = 1;
//                                                          // left2 = mergeSort(0,1) => mergeSort([9]);
//                                                                                          // [9]
//                                                          //right2 = mergeSort(1) => mergeSort([5]);
//                                                                                              // [5]
//                                                            return2 merge([9], [5]) => [5,9]  
// 
//               // right1 = mergeSort(arr.slice(2));       => mergeSort([6,3])
//                // right1 = [3,6]                                           //middleValue2 = 1;
//                                                               left2 = mergeSort(0,1) => mergeSort([6]);
//                                                                                                 // [6]
//                return merge(left1,right1) => [3,5,6,9]                                                  right2 = mergeSort(1) => mergeSort([3]);
//                                                                                                 // [3]         
//                                                                  return2 merge([6], [3]) => [3,6]
//    
// so final left array would be = [3,5,6,9];
// left = [3,5,6,9]
//similarly right = [1,2,4,7,8];
// return merge(left,right)
// [1,2,3,4,5,6,7,8,9];                         

/**
 * BIG O of Merge Sort
 * Time Complexity  - O(n log n)
 * Space Complexity - O(n)
 */