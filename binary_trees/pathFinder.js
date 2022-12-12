//Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

// You may assume that the tree contains unique values.



const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    //we reverse it because when we push the root.val, it goes to the end of the array.
    return result.reverse();
  }
};

//we have a helper function in order to give us an array of values that is the path to the node.
const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  let leftPath = pathFinderHelper(root.left, target);
  let rightPath = pathFinderHelper(root.right, target);

  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};
