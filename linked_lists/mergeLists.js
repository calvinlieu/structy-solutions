class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  // we create a new node to hold our new LL;
  const dummy = new Node(null);
  //create a variable that holds the head of the new LL;
  let head = dummy;

  let curr1 = head1;
  let curr2 = head2;
// while both LLs are not null
  while (curr1 !== null && curr2 !== null) {
    // if the value of node 1 is less than node 2, we will point the next node to node 1, else we point it to node 2.
    if (curr1.val < curr2.val) {
      head.next = curr1;
      curr1 = curr1.next;
    } else {
      head.next = curr2;
      curr2 = curr2.next;
    }
    //traverse to the next node;
    head = head.next;
  }
  //if either nodes are not null after the traversal, we will point the LL to the rest of the other LL.
  if (curr1 !== null) head.next = curr1;
  if (curr2 !== null) head.next = curr2;

  //return the next head of the dummy LL because the head of the LL is null;
  return dummy.next;
};


const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 