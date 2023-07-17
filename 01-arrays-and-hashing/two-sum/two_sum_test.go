package main

import (
	"reflect"
	"testing"
)

func TestTwoSum(t *testing.T) {
	// Test case 1: Regular scenario with a valid result
	nums1 := []int{2, 7, 11, 15}
	target1 := 9
	expected1 := []int{0, 1}
	result1 := twoSum(nums1, target1)
	if !reflect.DeepEqual(result1, expected1) {
		t.Errorf("Test case 1 failed: Expected %v, but got %v", expected1, result1)
	}

	// Test case 2: No valid pair
	nums2 := []int{3, 8, 10, 20}
	target2 := 15
	var expected2 []int = nil
	result2 := twoSum(nums2, target2)
	if !reflect.DeepEqual(result2, expected2) {
		t.Errorf("Test case 2 failed: Expected %v, but got %v", expected2, result2)
	}

	// Test case 3: Empty input slice
	nums3 := []int{}
	target3 := 5
	var expected3 []int = nil
	result3 := twoSum(nums3, target3)
	if !reflect.DeepEqual(result3, expected3) {
		t.Errorf("Test case 3 failed: Expected %v, but got %v", expected3, result3)
	}

	// Test case 4: Target equals the sum of two elements with same value
	nums4 := []int{1, 2, 3, 3}
	target4 := 6
	expected4 := []int{2, 3}
	result4 := twoSum(nums4, target4)
	if !reflect.DeepEqual(result4, expected4) {
		t.Errorf("Test case 4 failed: Expected %v, but got %v", expected4, result4)
	}
}
