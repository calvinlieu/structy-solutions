class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//       A -> B -> C -> D -> NULL

// const printLinkedList = (head) => {
//     let current = head;
//     while (current !== null) {
//         console.log(current.val);
//         current = current.next;
//     }
// };

//normal way of traversing
// const linkedListValues = (head) => {
//   let result = [];
//   let current = head;

//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }

//   return result;
// };

//recursive way of traversing
const linkedListValues = (head) => {
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};

//we use a helper function so that we do not have to create new arrays every time we make our recursive call.
//if we did not use a helper function, our time complexity will be o(n ^ 2).

console.log(linkedListValues(a));
