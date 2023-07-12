package main

import "testing"

func TestIsAnagram(t *testing.T) {
	// Test cases with expected true
	testCasesTrue := []struct {
		s        string
		t        string
		expected bool
	}{
		{"anagram", "nagaram", true},
		{"listen", "silent", true},
		{"", "", true},
	}

	for _, tc := range testCasesTrue {
		result := isAnagram(tc.s, tc.t)
		if result != tc.expected {
			t.Errorf("isAnagram(%s, %s) = %v, expected %v", tc.s, tc.t, result, tc.expected)
		}
	}

	// Test cases with expected false
	testCasesFalse := []struct {
		s        string
		t        string
		expected bool
	}{
		{"anagram", "magenta", false},
		{"listen", "silence", false},
		{"abc", "def", false},
	}

	for _, tc := range testCasesFalse {
		result := isAnagram(tc.s, tc.t)
		if result != tc.expected {
			t.Errorf("isAnagram(%s, %s) = %v, expected %v", tc.s, tc.t, result, tc.expected)
		}
	}
}
