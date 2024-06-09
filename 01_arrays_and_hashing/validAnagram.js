//Leetcode 242

function isAnagram(s, t) {

    if (s.length != t.length) {
        return false
    }

    let countS = {}
    let countT = {}

    for(let i = 0; i < s.length; i++) {
        if (s[i] in countS) {
            countS[s[i]] += 1
        }
        else {
            countS[s[i]] = 1
        }

        if (t[i] in countT) {
            countT[t[i]] += 1
        }
        else {
            countT[t[i]] = 1
        }
    }

    for (const key in countS) {
        if (countS[key] != countT[key]) {
            return false;
        }
    }
    
    return true;
}

//Test 1:
//Returns true
var s = "racecar", t = "carrace"
console.log(isAnagram(s, t))

//Test 2:
//Returns false
s = "jar", t = "jam"
console.log(isAnagram(s, t))
