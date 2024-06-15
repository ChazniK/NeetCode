
function findMin(nums) {
    if (nums.length < 2) {
        return nums[0];
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] > nums[right]) {
            left = middle + 1;
        }
        else {
            right = middle;
        }
    }

    return nums[left];
}

//Test 1
//Input
let nums = [3,4,5,1,2];
//Expected Output: 1  - The original array was [1,2,3,4,5] rotated 3 times.
console.log(findMin(nums))

//Test 2
//Input
nums = [4,5,6,7,0,1,2]
//Expected Output: 0 - The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
console.log(findMin(nums))


//Test 3
//Input
nums = [11,13,15,17]
//Expected Output: 11 - Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
console.log(findMin(nums))