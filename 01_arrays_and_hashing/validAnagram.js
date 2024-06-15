//Leetcode 242

function isAnagram(s, t) {
     
    if (s.length != t.length) {
        return false;
    }

    let sLetterCount = {};
    let tLetterCount = {};

    for (let i = 0; i < s.length; i++) {
        if(s[i] in sLetterCount) {
            sLetterCount[s[i]] += 1;
        }

        if(t[i] in tLetterCount) {
            tLetterCount[t[i]] += 1;
        }

        sLetterCount[s[i]] = 1;
        tLetterCount[t[i]] = 1;
    }

    for (var key in sLetterCount) {
        if (sLetterCount[key] == tLetterCount[key]) {
            continue;
        }
        
        return false;
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