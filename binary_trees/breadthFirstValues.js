const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];

  //we start with a queue instead of a stack because we are going down each level instead.
  const queue = [root];

  while (queue.length > 0) {

    //shifting grabs the first item in the queue.
    const node = queue.shift();
    values.push(node.val);

    if (node.left !== null) queue.push(node.left);

    if (node.right !== null) queue.push(node.right);
  }

  return values;
};
