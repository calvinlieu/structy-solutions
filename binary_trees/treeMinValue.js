const treeMinValue = (root) => {
  let value = Infinity;
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val < value) {
      value = node.val;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return value;
};
