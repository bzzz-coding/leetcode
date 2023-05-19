/*
Given two binary strings a and b, return their sum as a binary string.

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

https://leetcode.com/problems/add-binary/
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 10 + 1 = 11
// 101 + 1 = 110
// 1010 + 1011 = 10101
// const addBinary = (a, b) => {
//   let sum = '';
//   let [lenA, lenB] = [a.length, b.length];
//   let cutOffIndex = Math.min(lenA, lenB); 
//   let extra = 0;
//   for (let i = 1; i <= cutOffIndex; i++) { 
//     let [indexA, indexB] = [lenA - i, lenB - i]; 
//     let [valueA, valueB] = [+a[indexA], +b[indexB]]; 
//     let total = valueA + valueB + extra; 
//     console.log(`valueA: ${valueA}, valueB: ${valueB}`);
//     if (total >= 2) { 
//       sum = String(total % 2) + sum; 
//       extra = 1;
//     } else {
//       sum = String(total) + sum;
//       extra = 0;
//     }
//     console.log(`extra: ${extra}, sum: ${sum}`);
//   }
//   if (lenA > cutOffIndex || lenB > cutOffIndex) { 
//     for (let i = cutOffIndex; i > 0; i--) { 
//       let currentVal = +(a[lenA - 1 - i] || b[lenB - 1 - i]); 
//       let total = extra + currentVal;
//       console.log(`currentVal: ${currentVal}, total; ${total}`);
//       if (total >= 2) {
//         sum = String(total % 2) + sum;
//         extra = 1;
//       } else {
//         sum = String(total) + sum;
//         extra = 0;
//       }
//       console.log(`sum: ${sum}`);
//     } 
//   }
//   if (extra) {
//     sum = '1' + sum;
//   }
//   return sum;
// };

const addBinary = (a, b) => {
  let sum = '';
  let extra = 0;
  let [lenA, lenB] = [a.length, b.length];
  let cutOffTimes = Math.min(lenA, lenB); // if 3 & 5, check 3 times from end of either
  for (let i = 0; i < cutOffTimes; i++) { // for 3 times
    console.log(`first loop, currently checking index a ${lenA - 1 - i}, b ${lenB - 1 - i}`)
    let [valA, valB] = [+a[lenA - 1 - i], +b[lenB - 1 - i]];
    let total = extra + valA + valB;
    if (total >= 2) {
      extra = 1;
      sum = String(total % 2) + sum;
    } else {
      extra = 0;
      sum = String(total) + sum;
    }
  }
  console.log(`finished first loop, current sum: ${sum}, extra: ${extra}`);
  let longerStrSize = Math.max(lenA, lenB);
  let longerString = longerStrSize === lenA ? a : b;
  if (longerStrSize > cutOffTimes) {
    let remainingTimes = longerStrSize - cutOffTimes;
    console.log(`one string is longer than the other, remainingTimes: ${remainingTimes}`);
    for (let i = 0; i < remainingTimes; i++) { // 12345 345
      
      let currentVal = +longerString[longerStrSize - cutOffTimes - 1 - i];
      console.log(`currentIndex: ${longerStrSize - cutOffTimes - 1 - i}; currentVal: ${currentVal}`);
      let total = extra + currentVal;
      if (total >= 2) {
        extra = 1;
        sum = String(total % 2) + sum;
      } else {
        extra = 0;
        sum = String(total) + sum;
      }
    }
  }
  console.log(`now check if there is still extra`);
  if (extra) {
    sum = '1' + sum;
  }
  return sum
};


console.log(addBinary('101111', '10')); //110001