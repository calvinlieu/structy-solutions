const treeIncludes = (root, target) => {
  if (root === null) {
    return false;
  }
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val === target) {
      return true;
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return false;
};
