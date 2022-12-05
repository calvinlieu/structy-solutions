const depthFirstValues = (root) => {
    //if there is no root, return an empty array;
  if (root === null) {
    return [];
  }

  //create an array to hold all of our values;
  const result = [];

  //we start our stack at the root
  const stack = [root];

  //while we still have values in our stack
  while (stack.length > 0) {
    //we pop the last value of the array and push it into our result array.
    const current = stack.pop();
    result.push(current.val);

    //we check if there is still a child node within our tree;
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  //return the result array with all of our values
  return result;
};
