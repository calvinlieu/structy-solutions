// const fib = (n) => {
//   if (n === 0 || n === 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };


//memoization way

//we want to have a memo object which accounts for our hash set of data;

const fib = (n, memo = {}) => {
  //this if statement checks to see if we already have a value at the given fib sequence, if we do, we want to return the memo at fib(n);
  if (n in memo) {
    return memo[n];
  }

  //reguarly base cases for fib seq.
  if (n === 0) return 0;
  if (n === 1) return 1;


  //we set the value of the fib sequence to the memo at the nth object;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);


  //we finally wany to return the memo at the nth object.
  return memo[n];
};
