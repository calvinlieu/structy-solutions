const treeLevels = (root) => {
  if (root === null) return [];

  let levels = [];
  let queue = [{ node: root, levelNum: 0 }];

  while (queue.length > 0) {
    const { node, levelNum } = queue.shift();
    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left !== null)
      queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null)
      queue.push({ node: node.right, levelNum: levelNum + 1 });
  }
  return levels;
};


