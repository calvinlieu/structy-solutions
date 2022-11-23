const longestStreak = (head) => {
  // todo
  let current = head;

  //create a variable that holds our value;
  let prev = null;
  
  let currCount = 0;
  let maxCount = 0;

  while (current !== null) {
    if (current.val === prev) {
      currCount += 1;
    } else {
      currCount = 1;
    }
    if (currCount > maxCount) {
      maxCount = currCount;
    }
    prev = current.val;
    current = current.next;
  }

  return maxCount;
};


