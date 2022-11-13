// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

//space and time complexity: O(n * m), O(1)

const uncompress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;
    let nums = "0123456789"
    
    while (j < s.length) {
      if (nums.includes(s[j])) {
        j += 1;
      } else {
        const num = Number(s.slice(i, j))
        for (let count = 0; count < num; count++) {
          result.push(s[j])
        }
        j++;
        i = j;
      }
    }
    
    return result.join("")
  };