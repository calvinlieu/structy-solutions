const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index) {
      return current.val;
    }
    current = current.next;
    count++;
  }

  return null;
};
