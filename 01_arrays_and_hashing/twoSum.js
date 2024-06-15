//Leetcode 1

function twoSum(nums, target) {
    let numberDict = {}

    for(let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let difference = target - number;

        if (difference in numberDict) {
            return [numberDict[difference], i]
        }
        
        numberDict[i] = number;
    }
}

//Test 1:
//Returns [0, 1]
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target))

//Test 2:
//Returns [1,2]
nums = [3,2,4]
target = 6
console.log(twoSum(nums, target))

//Test 3:
//Returns [0,1]
nums = [3,3]
target = 6
console.log(twoSum(nums, target))