const howHigh = (node) => {

//base case
  if (node === null) {
    return -1;
  }

  //recursive calls on both the left and right of the tree.
  let leftHeight = howHigh(node.left);
  let rightHeight = howHigh(node.right);

  //we start with 1 because if the tree is not null, then we will have a default of 1;
  //we run math.max against the left and right tree height to see which is taller and return that.
  return 1 + Math.max(leftHeight, rightHeight);
};
