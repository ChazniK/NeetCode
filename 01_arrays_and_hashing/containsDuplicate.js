//Leetcode 217

function hasDuplicate(nums) {
    let numberCount = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num in numberCount) {
            return true;
        }
        else {
            numberCount[num] = 1;
        }
    }

    return false;
}

//Test 1:
//Returns true
let nums = [1, 2, 3, 3]
console.log(hasDuplicate(nums))

//Test 2:
//Returns false
nums = [1, 2, 3, 4]
console.log(hasDuplicate(nums))