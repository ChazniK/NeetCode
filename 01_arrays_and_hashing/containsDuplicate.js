//Leetcode 217

function hasDuplicate(nums) {
    let dict = {};

    for (let i = 0; i < nums.length; i++) {
        var num = nums[i]
       
        if (num in dict) {
            return true
        }

        dict[num] = 1
    }
    
    return false
}

//Test 1:
//Returns true
let nums = [1, 2, 3, 3]
console.log(hasDuplicate(nums))

//Test 2:
//Returns false
nums = [1, 2, 3, 4]
console.log(hasDuplicate(nums))