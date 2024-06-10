//Leetcode 125

function isPalindrome(s) {

    let isAlphaNumeric = (char) => {
        let ascii = char.charCodeAt(0)
        if (ascii >= 48 && ascii <= 57) {
            return true
        }
        else if (ascii >= 65 && ascii <= 90) {
            return true
        }
        else if (ascii >= 97 && ascii <= 122) {
            return true
        }
        else {
            return false
        }
    }

    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        while (!isAlphaNumeric(s[start]) && start < end) {
            start++;
        }
        while (!isAlphaNumeric(s[end]) && end > start) {
            end--;
        }
        if (s[start].toLowerCase() != s[end].toLowerCase()) {
            return false
        }
        start++;
        end--;
    }
    
    return true
}

//Test 1
//Returns true
let s = "Was it a car or a cat I saw?"
console.log(isPalindrome(s))

//Test 2
//Returns false
s = "tab a cat"
console.log(isPalindrome(s))
