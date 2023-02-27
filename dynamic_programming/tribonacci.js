//brute force with recursion;

// const tribonacci = (n) => {
//   if (n === 0 || n === 1) return 0;

//   if (n === 2) return 1;

//   return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

//dynamic programming using memoization
//declare a memo object
const tribonacci = (n, memo = {}) => {

    // check if n is in our memo, if so, return the value of the memo at n
  if (n in memo) return memo[n];


  //same base cases
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  //reassign the current memoization with our recursive calls.
  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  //return the memo's value at the nth iteration
  return memo[n];
  // todo
};
