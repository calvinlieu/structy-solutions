// const treeLevels = (root) => {
//   if (root === null) return [];

//   let levels = [];
//   let queue = [{ node: root, levelNum: 0 }];

//   while (queue.length > 0) {
//     const { node, levelNum } = queue.shift();
//     if (levels.length === levelNum) {
//       levels.push([node.val]);
//     } else {
//       levels[levelNum].push(node.val);
//     }

//     if (node.left !== null)
//       queue.push({ node: node.left, levelNum: levelNum + 1 });
//     if (node.right !== null)
//       queue.push({ node: node.right, levelNum: levelNum + 1 });
//   }
//   return levels;
// };


//recursive
const treeLevels = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);
    return levels;
  }
  
  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;
    
    if (levels.length === levelNum) {
        levels.push([root.val])
      } else {
        levels[levelNum].push(node.val)
      }
    
    fillLevels(root.left, levelsNum + 1)
    fillLevels(root.right, levelsNum + 1)
    
  }
