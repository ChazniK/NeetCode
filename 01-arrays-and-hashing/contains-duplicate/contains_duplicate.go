package main

func containsDuplicate(nums []int) bool {

	num_dict := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		num := nums[i]
		if num_dict[num] == 1 {
			return true
		} else {
			num_dict[num] = 1
		}
	}
	return false
}
