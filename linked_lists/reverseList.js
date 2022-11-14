class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head) => {
    // we first create a prev variable to hold our first value which is null;
  let prev = null;
  // we also create a variable to hold our head node.
  let current = head;

  //we run the typical node traversal when the current node does not equal to null
  while (current !== null) {
    // we create a next variable that holds our next node
    let next = current.next;
    // we then point our next node to our prev variable. 
    current.next = prev;
    // assign our prev to the current node
    prev = current;
    // we shift our current to our next node to continue the traversal
    current = next;
  }
  //return the head of our reversed linked list
  return prev;
};





console.log(reverseList(a)); // f -> e -> d -> c -> b -> a)