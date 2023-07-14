function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  let l = 0;
  let charSet = new Set<string>();

  for (let r = 0; r < s.length; r++) {
      let char = s[r];
      if (charSet.has(char)) {
          // If char already in set, update res
          res = Math.max(res, charSet.size);
          // While set still has char, keep deleting from the left
          while (charSet.has(char)) {
              charSet.delete(s[l]);
              l++;
          }
      }
      // Add char to set
      charSet.add(char);
  }

  // update res one last time just in case
  res = Math.max(res, charSet.size);

  return res;
};

console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));

