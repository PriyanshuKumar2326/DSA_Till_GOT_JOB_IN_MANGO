//Middle of the Linked List

function middle(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//Reverse the LinkedList

function reverse(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}

//Linked List Cycle
// time=O(n);
//space=O(n);
//brute force
function linkedCycle(head) {
  let seenNode = new set();
  let curr = head;
  while (curr) {
    if (seenNode.has(curr)) {
      return true;
    }
    seenNode.add(curr);
    curr = curr.next;
  }
  return false;
}
//time

//Optimize
function linkedOp(head) {
  let slow = (fast = head);
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
