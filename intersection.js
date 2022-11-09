const intersection = (a, b) => {
  // todo
  const result = [];
  let mySet = new Set(a);

  for (let item of b) {
    if (mySet.has(item)) {
      result.push(item);
    }
  }

  return result.sort();
};

console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6])