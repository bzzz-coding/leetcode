/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

// Logic: for each index, get the maxHeight on its left and the maxHeight on its right, only if the height[i] is lower than the min of (leftMaxHeight, rightMaxHeight), it can retain water
// So the water at each index is Math.min(leftMaxHeight, rightMaxHeight) - height[i] (or 0 water if the result is < 0)

// method 1
function trap(heights: number[]): number {
  let res = 0;
  // set an array to keep track of leftMaxHeight and rightMaxHeight
  const maxHeightArr: number[] = [];
  // first loop from left to right
  let currentMax = 0;
  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    if (currentHeight > currentMax) {
      currentMax = currentHeight;
    } 
    maxHeightArr.push(currentMax);
  }
  // reset currentMax
  currentMax = 0;
  // now loop from right to left, get min of leftMaxHeight and rightMaxHeight, and subtract currentHeight, tally positive water values
  for (let i = heights.length - 1; i >= 0; i--) {
    const currentHeight = heights[i];
    if (currentHeight > currentMax) {
      currentMax = currentHeight;
    }
    const diff = Math.min(maxHeightArr[i], currentMax) - currentHeight;
    res += diff > 0? diff : 0;
  }
  
  return res;
};