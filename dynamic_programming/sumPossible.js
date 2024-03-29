const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;

  if (amount === 0) return true;

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
};


// O(a * n) time
//O(a) space