class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//iternative
// const sumList = (head) => {
//   let totalSum = 0;
//   let current = head;

//   while (current !== null) {
//     totalSum += current.val;
//     current = current.next;
//   }

//   return totalSum;
// };


//recursive
const sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next)
}





const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

console.log(sumList(x)); // 42