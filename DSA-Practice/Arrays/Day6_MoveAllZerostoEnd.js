//Problem 5: Given an array, move all 0s to the end while keeping the order of non-zero elements the same.

function moveZeros(arr) {
    let pos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[pos], arr[i]] = [arr[i], arr[pos]];
            pos++;
        }
    }

    return arr;
}

let arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));