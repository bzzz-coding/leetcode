/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

// // Brute force: sort each word

// interface GroupHash {
//     [propName: string]: string[];
// }

// function groupAnagrams(strs: string[]): string[][] {
//     const groupHash = {};
//     for (const str of strs) {
//         const sortedStr = str.split('').sort().join('');
//         if (groupHash[sortedStr] !== undefined) {
//             groupHash[sortedStr].push(str);
//         } else {
//             groupHash[sortedStr] = [str];
//         }
//     }
//     return Object.values(groupHash);
// };

function groupAnagramsMap(strs: string[]): string[][] {
  const anagramsMap = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (anagramsMap.has(sortedStr)) {
      anagramsMap.get(sortedStr)?.push(str)
    } else {
      anagramsMap.set(sortedStr, [str]);
    }
  }

  const result:string[][] = [];

  for (const anagramsArr of anagramsMap.values()) {
    result.push(anagramsArr);
  }

  return result;
}



// Without sorting
interface GroupHash {
  [propName: string]: string[];
}

function groupAnagramsWOSorting(strs: string[]): string[][] {
  const groupHash: GroupHash = {};
  for (const str of strs) {
      const arr = Array(26).fill(0);
      for (const char of str) {
          const charIndex = char.charCodeAt(0) - 97;
          arr[charIndex]++;
      }
      const strProp = arr.join('-');
      console.log(strProp);
      if (groupHash[strProp] !== undefined) {
          groupHash[strProp].push(str);
      } else {
          groupHash[strProp] = [str];
      }
  }
  return Object.values(groupHash);
};

console.log(groupAnagramsWOSorting(["ddddddddddg","dgggggggggg"]))