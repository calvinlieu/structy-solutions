const zipperLists = (head1, head2) => {

  //start off our new list at head1;
  let head = head1;


  let curr1 = head1.next;
  let curr2 = head2;

  // this count tells us whether we will need to take a node from our head 1 or head 2.
  let count = 0;
  

  //while both linked lists are not null
  while (curr1 !== null && curr2 !== null) {
    //if count is even, then we'll take a node from list 2.
    if (count % 2 === 0) {
      head.next = curr2;
      //since we took something from curr2, we'll need to traverse our LL to the next head.
      curr2 = curr2.next; 
      //if the count is odd, we'll take a node from list 1.
    } else {
      head.next = curr1;
      //since we took something from curr1, we'll need to traverse our LL to the next head.
      curr1 = curr1.next;
    }

    //we move our head pointer to the next point
    head = head.next;

    //
    count++;
  }
  
  //if curr1 still has values in the LL, then we will add that to the end of our head LL.
  if (curr1 !== null) head.next = curr1;

  //if curr2 still has values in the LL, then we will add that to the end of our head LL.

  if (curr2 !== null) head.next = curr2;
  
  //return our new LL at the end.
  return head1;
};
  