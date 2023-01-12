const leafList = (root) => {
  if (root === null) return [];
  const leaves = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null)
      leaves.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return leaves;
};
