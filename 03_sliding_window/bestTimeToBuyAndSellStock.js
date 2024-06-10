//Leetcode 121

function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }
        else {
            left = right
        }

        right++;
    }    

    return maxProfit;
}

//Test 1
//Returns 6
let prices = [10,1,5,6,7,1]
console.log(maxProfit(prices))

//Test 2
//Returns 0
prices = [10,8,7,5,2]
console.log(maxProfit(prices))

//Test 3
//Returns 1
prices = [2,1,2,0,1]
console.log(maxProfit(prices))