// const treeMinValue = (root) => {
//   let value = Infinity;
//   let queue = [root];

//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (node.val < value) {
//       value = node.val;
//     }
//     if (node.left !== null) {
//       queue.push(node.left);
//     }
//     if (node.right !== null) {
//       queue.push(node.right);
//     }
//   }

//   return value;
// };



//recursive way
const treeMinValue = (root) => {
  //we check if the tree is empty to have as a default value.
  if (root === null) return Infinity;

  //we make our recursive calls on both left and right child. these will give us back the smallest value.
  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);

  //we run math.min on all of our values which will return us the smallest value.
  return Math.min(root.val, leftMin, rightMin);
};
