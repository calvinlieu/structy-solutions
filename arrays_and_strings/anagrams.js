const anagrams = (s1, s2) => {
  let count = {};

  for (let char of s1) {
    if (!(count[char])) {
      count[char] = 0
    }
    count[char] += 1
  }

  for (let char of s2) {
    if (count[char] === undefined) {
      return false
    } else {
      count[char] -= 1
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

//time and space complexity: o(n + m) where n and m are the length of the input strings. Space: o(n) since we are only using a hash map.