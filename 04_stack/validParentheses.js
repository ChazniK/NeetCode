//Leetcode

function isValid(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        }
        else {
            let checkStack = stack.pop();
            if (checkStack == '(' && s[i] == ')') {
                continue;
            }
            if (checkStack == '{' && s[i] == '}') {
                continue;
            }
            if (checkStack == '[' && s[i] == ']') {
                continue;
            }

            return false;
        }
    }

    return stack.length == 0;
}

//Test 1
//Returns true
let s = "[]"
console.log(isValid(s))

//Test 2
//Returns true
s = "([{}])"
console.log(isValid(s))

//Test 3
//Returns false
s = "[(])"
console.log(isValid(s))