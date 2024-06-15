
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] > nums[right]) {
            left = middle + 1
        }
        else {
            right = middle;
        }
    }

    //index of minimum value
    let minIndex = left;
    console.log(minIndex)

    if (minIndex == 0) {
        left = 0;
        right = nums.length - 1;
    }
    else if (target >= nums[0] && target <= nums[minIndex - 1]) {
        left = 0;
        right = minIndex - 1;
    }
    else {
        left = minIndex;
        right = nums.length - 1;
    }

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] == target) {
            return middle;
        }
        else if (nums[middle] < target) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    
    return -1;
}

//Test 1
//Output: 4
let target = 1
let nums = [3,4,5,6,1,2]
//console.log(search(nums, target))

//Test 2
//Output: -1
target = 4
nums = [3,5,6,0,1,2]
//console.log(search(nums, target))


//Test 3
//Output: 1
target = 3;
nums = [1,3];
//console.log(search(nums, target))

//Test 3
//Output: 2
target = 1;
nums = [3,5,1];
console.log(search(nums, target));