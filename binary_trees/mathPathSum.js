const maxPathSum = (root) => {

    //if the root is null, we set it to -infinity  so that it will not interfere with us taking a max number from each side.
  if (root === null) return -Infinity;

  //we check if we have any leaf nodes connected
  if (root.left === null && root.right === null) return root.val;

    //we make a recursive call on our left and right node to see which one is higher and set it to a variable.
  let maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right))

  return root.val + maxChild;
};
