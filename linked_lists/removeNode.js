const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;


  //edge case if the targetValue is the head of the LL
  if (current.val === targetVal) {
    return head.next;
  }

  while (current !== null) {
    if (current.val === targetVal) {
        //we assign the previous's node to the next node which cancels out the current node
      prev.next = current.next;
      break;
    }
    //if it doesnt hit our if statement, we go on regularly with our traversal.
    prev = current;
    current = current.next;
  }

  return head;
};


