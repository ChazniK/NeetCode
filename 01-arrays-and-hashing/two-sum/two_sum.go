package main

func twoSum(nums []int, target int) []int {

	complementMap := make(map[int]int)
	for i, num := range nums {
		complement := target - num

		if index, found := complementMap[complement]; found {
			return []int{index, i}
		}
		complementMap[num] = i
	}

	return nil
}
