var middleNode = function (head) {
  // let current = head;
  // let arr = [];

  // while (current !== null) {
  //     arr.push(current);
  //     current = current.next;
  // }

  // let div = Math.floor((arr.length / 2) + 1)

  // return arr[div - 1]

  //current = 3
  //head = 1
  //div = 3
  //totalNums = 5
  //count = 3

  let current = head;
  let totalNums = 0;
  while (current !== null) {
    totalNums += 1;
    current = current.next;
  }

  let div = Math.floor(totalNums / 2 + 1);
  let count = 1;
  current = head;
  while (current !== null) {
    if (count === div) {
      return current;
    }
    count += 1;
    current = current.next;
  }
};
