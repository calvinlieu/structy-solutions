const treeValueCount = (root, target) => {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let count = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val === target) {
      count++;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return count;
};
