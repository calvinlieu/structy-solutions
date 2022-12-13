// const treeValueCount = (root, target) => {
//   if (root === null) {
//     return 0;
//   }

//   let queue = [root];
//   let count = 0;

//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (node.val === target) {
//       count++;
//     }
//     if (node.left !== null) {
//       queue.push(node.left);
//     }
//     if (node.right !== null) {
//       queue.push(node.right);
//     }
//   }

//   return count;
// };

//recursive way

const treeValueCount = (root, target) => {
  //if there's no root, then we return 0;
  if (root === null) {
    return 0;
  }

  //we create a variable that holds our if statement for each recursive call.
  //if the root.val matches the target, we add 1 to our match variable.
  let match = root.val === target ? 1 : 0;
  
  //we then add our match + our recursive calls on both the left and right tree.
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
};
