const allTreePaths = (root) => {
  if (root === null) return [];

  //we return the root value as our basecase.
  if (root.left === null && root.right === null) return [[root.val]];


  // we make a new array to hold our values.
  const paths = [];


  //recursively call both left and right of each node.
  const leftSubPaths = allTreePaths(root.left);
  for (let sub of leftSubPaths) {
    paths.push([root.val, ...sub]);
  }

  const rightSubPaths = allTreePaths(root.right);
  for (let sub2 of rightSubPaths) {
    paths.push([root.val, ...sub2]);
  }
  return paths;
};
