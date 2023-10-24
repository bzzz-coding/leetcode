/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
      return false; // Anagrams must have the same length.
  }

  const charCount = new Map<string, number>();

  // Count the characters in string s.
  for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Decrement the character count for string t.
  for (const char of t) {
      if (!charCount.has(char)) {
          return false; // If a character is not in s, it's not an anagram.
      }
      charCount.set(char, charCount.get(char) as number - 1);
      if (charCount.get(char) === 0) {
          charCount.delete(char);
      }
  }

  return charCount.size === 0;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// Split+sort+join, === compare strings; O(NLogN)
function isAnagramSort(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// Hashmap; O(N)
interface CharHash {
  [propName: string]: number;
}

function isAnagramHash(s: string, t: string): boolean {
    // First check length equality
    if (t.length !== s.length) return false;
    // Loop through s to create a hash table
    const charHash: CharHash = {}; 
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charHash[char] = charHash[char] + 1 || 1;
    }
    // Loop through t, for each char, if charHash[char] <= 0, return false; otherwise subtract from the value in charHash[char]
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!charHash[char]) return false;
        charHash[char]--;
    }
    // If exits loop without returning (false), return true
    return true;
};
