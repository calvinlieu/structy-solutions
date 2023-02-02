const treeSum = (root) => {
  if (root === null) return 0;
  let sum = 0;
  let queue = [root];
  
  while (queue.length > 0) {
    let node = queue.shift();
    sum += node.val;
    
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }
  
  return sum;
};
