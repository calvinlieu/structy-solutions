const bottomRightValue = (root) => {
  let queue = [root];
  let current = null;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return current.val;
};

//since we are just looking for the bottom most right node, we can use BFS in order to go down via a queue.

//this will enable us to get to the last node by traversing through the tree and returning it at the end.