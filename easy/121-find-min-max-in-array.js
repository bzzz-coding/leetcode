/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

// Pass in: array of numbers
// Return: Max - Min where index of Max needs to be greater than Min, or return 0

// Loop through array, and keep track of the min and max so far: if current value is new min, and if there is a max already, store this profit and reset min and clear Max

const maxProfit = (prices) => {
  let [min, max] = [null, null];
  let bestProfitSoFar = 0;
  for (const price of prices) {
    console.log(`current price ${price}, min: ${min}, max: ${max}, bestProfitSoFar${bestProfitSoFar}`)
    // if no min, the first price will be min
    if (min === null) {
      min = price;
    } else if (price < min) { // if min and seen new lower price
      // check if there is a max, if so, what's the profit
      if (max !== null) {
        let profit = max - min;
        if (profit > bestProfitSoFar) { // if profit is better the best so far, replace best
          bestProfitSoFar = max - min;
        }
      } 
      min = price; // reset min to current new low price
      max = null; // reset max to null
    } else if (max === null || price > max) {
      max = price;
    }
  }
  // outside of loop need to check again the current max and min
  console.log(`Outside of loop, min: ${min}, max: ${max}, bestProfitSoFar: ${bestProfitSoFar}`)
  if (min !== null && max !== null) {
    let lastProfit = max - min;
    console.log(lastProfit)
    if (lastProfit > bestProfitSoFar) {
      return lastProfit
    }
  }
  
  return bestProfitSoFar
};

console.log(maxProfit([1,1,0]))


