const addLists = (head1, head2) => {
    //create a new LL called dummyhead;
  let dummyHead = new Node(null);
  //make a current variable
  let current = dummyHead;
  //carry indicates whether or not we need to carry a 1 over to our next node's value.
  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  //classic while loop where we check if all LLs are not null
  while (current1 !== null || current2 !== null || carry !== 0) {
    //if the current node is null and the other one still has values, we set it to 0 so that we can add both nodes.
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    //sum is used to get the sum of the current index in each LL;
    const sum = val1 + val2 + carry;
    // if the sum is greater than 9 then our carry will be set to 1 else set it to 0;
    carry = sum > 9 ? 1 : 0;

    //digit variable is used to add our new node for values that are greater than 10;
    const digit = sum % 10;

    current.next = new Node(digit);
    current = current.next;
    
    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }
  return dummyHead.next;
};
