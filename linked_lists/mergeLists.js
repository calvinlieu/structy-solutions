class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  const dummy = new Node(null);
  let head = dummy;
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      head.next = curr1;
      curr1 = curr1.next;
    } else {
      head.next = curr2;
      curr2 = curr2.next;
    }

    head = head.next;
  }
  if (curr1 !== null) head.next = curr1;
  if (curr2 !== null) head.next = curr2;

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