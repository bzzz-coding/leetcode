let str = 'hello world';

let replacedStr = str.replace('o', (match, i, arr) => String(i) + match.toUpperCase() + String(arr.length));
console.log(replacedStr);