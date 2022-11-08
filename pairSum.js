const pairSum = (numbers, targetSum) => {
    //using a hashmap to keep track of all iterations
    const previousNums = {};

    //run a forloop through our numbers array
    for (let i = 0; i < numbers.length; i += 1) {
        //make a variable for the current number in the iteration
      const num = numbers[i];
      //make a variable for the difference of our target sum and current number
      const complement = targetSum - num;

      //if our different key is in our hashmap, we want to return the current iteration as well as the number located in our hashmap.
      if (complement in previousNums) return [i, previousNums[complement]];
      
      // if it does not hit our if statement, then we will assign the current iteration into our hashmap.
      previousNums[num] = i;
    }
  };

  pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]