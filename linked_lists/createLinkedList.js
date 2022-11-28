class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
    //create a new linked list with a value of null;
  let newList = new Node(null);

  //create a variable that holds the current LL;
  let head = newList;

  //run a for loop on our array of values;
  for (let val of values) {

    //assign the next LL with a new created node of the value in the next iteration;
    head.next = new Node(val);

    //classic traversal;
    head = head.next;
  }

  //return our linked list that we created with the next node since our first node is null;
  return newList.next;
};
