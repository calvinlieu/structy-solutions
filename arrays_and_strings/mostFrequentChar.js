const mostFrequentChar = (s) => {
  let count = {};

  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let highest = null;
  for (let char of s) {
    if (highest === null || count[char] > count[highest]) {
      highest = char;
    }
  }

  return highest;
};

//time and space: O(n) O(n)

console.log(mostFrequentChar("bookeeper")); // -> 'e'
