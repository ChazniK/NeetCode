package main

import (
	"testing"
)

func TestContainsDuplicate(t *testing.T) {
	// Test cases with expected true
	testCasesTrue := []struct {
		nums     []int
		expected bool
	}{
		{[]int{1, 2, 3, 1}, true},
		{[]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, true},
	}

	for _, tc := range testCasesTrue {
		result := containsDuplicate(tc.nums)
		if result != tc.expected {
			t.Errorf("containsDuplicate(%v) = %v, expected %v", tc.nums, result, tc.expected)
		}
	}

	// Test cases with expected false
	testCasesFalse := []struct {
		nums     []int
		expected bool
	}{
		{[]int{1, 2, 3, 4}, false},
		{[]int{7, 8, 9}, false},
	}

	for _, tc := range testCasesFalse {
		result := containsDuplicate(tc.nums)
		if result != tc.expected {
			t.Errorf("containsDuplicate(%v) = %v, expected %v", tc.nums, result, tc.expected)
		}
	}
}
