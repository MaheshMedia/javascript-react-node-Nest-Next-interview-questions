//Problem 7: Given an array, rotate the array to the left by one position.

function leftRotateByOne(arr) {

    // Step 1: Store first element
    let temp = arr[0];

    // Step 2: Shift elements to the left
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Step 3: Place first element at the end
    arr[arr.length - 1] = temp;

    return arr;
}

// Test Cases
console.log(leftRotateByOne([1,2,3,4,5])); // [2,3,4,5,1]
console.log(leftRotateByOne([10,20,30]));  // [20,30,10]
console.log(leftRotateByOne([7]));         // [7]
console.log(leftRotateByOne([5,6]));       // [6,5]