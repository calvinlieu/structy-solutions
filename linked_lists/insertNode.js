const insertNode = (head, value, index) => {

    //edge case if we want to insert the node at the head of the LL
  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let count = 0;
  let current = head;

  while (current !== null) {
    //we check if the count is the same as the index - 1 because our logic will be manipulating the next node and the next next node.
    if (count === index - 1) {
      let temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }
    current = current.next;
    count++;
  }

  return head;
};
