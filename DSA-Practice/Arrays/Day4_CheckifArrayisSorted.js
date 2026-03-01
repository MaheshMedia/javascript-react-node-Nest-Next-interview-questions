//Problem 4: Check if Array is Sorted: Given an array, check whether it is sorted in ascending order
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Example
console.log(isSorted([1, 2, 3, 4, 5]));   // true
console.log(isSorted([1, 3, 2, 4, 5]));   // false