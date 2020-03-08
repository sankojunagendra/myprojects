// General solution for bubble sort
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {  // 8 comparisions
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,9,2,4,3,1,7,6,8]));

// This is what will happen inside nested for loop.
// It basically compares two values and swap the highest value to the next index.

// values comparing => swapping the values => final output after swapping

//     5 9          =>      5 9            =>     5 9 2 4 3 1 7 6 8
//     9 2          =>      2 9            =>     5 2 9 4 3 1 7 6 8
//     9 4          =>      4 9            =>     5 2 4 9 3 1 7 6 8
//     9 3          =>      3 9            =>     5 2 4 3 9 1 7 6 8
//     9 1          =>      1 9            =>     5 2 4 3 1 9 7 6 8
//     9 7          =>      7 9            =>     5 2 4 3 1 7 9 6 8
//     9 6          =>      6 9            =>     5 2 4 3 1 7 6 9 8
//     9 8          =>      8 9            =>     5 2 4 3 1 7 6 8 9

// Next it returns to the outer loop
// so now the value of i = 8 && the comparisions will be 7

// values comparing => swapping the values => final output after swapping

//      5 2         =>         2 5         =>       2 5 4 3 1 7 6 8 9
//      5 4         =>         4 5         =>       2 4 5 3 1 7 6 8 9
//      5 3         =>         3 5         =>       2 4 3 5 1 7 6 8 9
//      5 1         =>         1 5         =>       2 4 3 1 5 7 6 8 9
//      5 7         =>         5 7         =>       2 4 3 1 5 7 6 8 9
//      7 6         =>         6 7         =>       2 4 3 1 5 6 7 8 9
//      7 8         =>         7 8         =>       2 4 3 1 5 6 7 8 9


// Next it returns to the outer loop
// so now the value of i = 7 && the comparisions will be 6

// values comparing => swapping the values => final output after swapping

//      2 4         =>         2 4         =>       2 4 3 1 5 6 7 8 9
//      4 3         =>         3 4         =>       2 3 4 1 5 6 7 8 9
//      4 1         =>         1 4         =>       2 3 1 4 5 6 7 8 9
//      4 5         =>         4 5         =>       2 3 1 4 5 6 7 8 9
//      5 6         =>         5 6         =>       2 3 1 4 5 6 7 8 9
//      6 7         =>         6 7         =>       2 3 1 4 5 6 7 8 9


// Next it returns to the outer loop
// so now the value of i = 6 && the comparisions will be 5

// values comparing => swapping the values => final output after swapping

//      2 3         =>         2 3         =>       2 3 1 4 5 6 7 8 9
//      3 1         =>         1 3         =>       2 1 3 4 5 6 7 8 9
//      3 4         =>         3 4         =>       2 1 3 4 5 6 7 8 9
//      4 5         =>         4 5         =>       2 1 3 4 5 6 7 8 9
//      5 6         =>         5 6         =>       2 1 3 4 5 6 7 8 9


// Next it returns to the outer loop
// so now the value of i = 5 && the comparisions will be 4

// values comparing => swapping the values => final output after swapping

//      2 1         =>         1 2         =>       1 2 3 4 5 6 7 8 9
//      2 3         =>         2 3         =>       1 2 3 4 5 6 7 8 9
//      3 4         =>         3 4         =>       1 2 3 4 5 6 7 8 9
//      4 5         =>         4 5         =>       1 2 3 4 5 6 7 8 9             

// Next it returns to the outer loop
// so now the value of i = 4 && the comparisions will be 3

// values comparing => swapping the values => final output after swapping

//      1 2         =>         1 2         =>       1 2 3 4 5 6 7 8 9
//      2 3         =>         2 3         =>       1 2 3 4 5 6 7 8 9
//      3 4         =>         3 4         =>       1 2 3 4 5 6 7 8 9

// Next it returns to the outer loop
// so now the value of i = 3 && the comparisions will be 2

// values comparing => swapping the values => final output after swapping

//      1 2         =>         1 2         =>       1 2 3 4 5 6 7 8 9
//      2 3         =>         2 3         =>       1 2 3 4 5 6 7 8 9

// Next it returns to the outer loop
// so now the value of i = 2 && the comparisions will be 1

// values comparing => swapping the values => final output after swapping

//      1 2         =>         1 2         =>       1 2 3 4 5 6 7 8 9

// Next it returns to the outer loop
// so now the value of i = 1 && the comparisions will be 0

// The given array is sorted and there is nothing to compare.