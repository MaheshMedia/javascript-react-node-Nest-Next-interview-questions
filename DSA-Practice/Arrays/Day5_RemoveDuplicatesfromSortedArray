//Problem 5: Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1; // length of unique elements
}

// Example
let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(nums);

console.log(newLength);        // 5
console.log(nums.slice(0, newLength)); // [1,2,3,4,5]