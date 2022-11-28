const longestStreak = (head) => {
  // todo
  let current = head;

  //create a variable that holds our value;
  let prev = null;

  //current count of the streak;
  let currCount = 0;

  //highest streak
  let maxCount = 0;

  while (current !== null) {
    if (current.val === prev) {
        //if the node value is equal to the previous node value, then we add 1 to our current count;
      currCount += 1;
    } else {
        //if not, we let that be our first count;
      currCount = 1;
    }

    //reassign our prev value to the current node's value before we traverse to the next node.
    prev = current.val;
    current = current.next;

    //if the current count is greater than our max count then we replace max count with the current count;
    if (currCount > maxCount) {
      maxCount = currCount;
    }

  }

  return maxCount;
};


