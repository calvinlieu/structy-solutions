const linkedListFind = (head, target) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    count++;
    current = current.next;
  }
  return false;
};
