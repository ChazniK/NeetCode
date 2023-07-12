package main

import (
	"sort"
)

func isAnagram(s string, t string) bool {

	if len(s) != len(t) {
		return false
	}

	bytesS := []byte(s)
	bytesT := []byte(t)

	sort.Slice(bytesS, func(i, j int) bool {
		return bytesS[i] < bytesS[j]
	})

	sort.Slice(bytesT, func(i, j int) bool {
		return bytesT[i] < bytesT[j]
	})

	for i := 0; i < len(bytesS); i++ {
		if bytesS[i] != bytesT[i] {
			return false
		}
	}
	return true
}
