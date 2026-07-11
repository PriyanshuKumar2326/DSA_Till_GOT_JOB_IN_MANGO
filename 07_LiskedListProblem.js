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
//time:=O(n);
//Space:=O(1);
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

//Linked List Palindrome by converting linkedlist into arr then check

function linkedListPalindrome(head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] != arr[end]) {
      console.log("Not palindrome Linked List");
      return;
    }
    start++;
    end--;
  }
  console.log("Palindrome Linked List");
}

//Linked List Optimize
//time:=O(n);
//space:=O(1);
function LinkedPalin(head) {
  //Find the middle of element

  let slow = (fast = head);
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse the second half of list
  let prev = null;
  let curr = slow;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking for plaindrome
  let first = head;
  let second = prev;

  while (second != null) {
    if (first.value !== second.value) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
}

//Intersection of two Linked List
//Brute force   time:=O(m*n)=O(n^2);
// space=O(1);

//Opimize time:=O(1);
function checkedLiskedList(headA, headB) {
  let seenNode = new Set();

  let first = headA;
  let second = headB;
  //put all nodes of headA inside a Set
  while (first) {
    seenNode.add(first);
    first = first.next;
  }

  //Check for each element of HeadB if they are present in HeadA
  while (second) {
    if (seenNode.has(second)) {
      return second;
    }
    second = second.next;
  }

  return null;
}

//Remove Linked List Element
//Time:=O(n);
function ListNode(value, next) {
  this.value = value;
  this.next = next;
}
function removeLinked(head, value) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.next.value === value) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}

//Remove nth node from end of the Linked List // Two pass solution/
//Time complexity:=O(m+n)=O(2n)=O(n);
//Spcae Complexity=O(1)
function removeNthNode(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  // let deletePosition=(length-n)+1;
  let prevPosition = length - n;
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
}

//One pass

function OnePass(head, n) {
  //create sentinal node to get previous element add before first node
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = (second = sentinel);

  //move first pointer nth step haead
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  //move both first and second pointer 1step till first pointer till reach last node or first.next==null;
  while (first && first.next) {
    second = second.next;
    first = first.next;
  }
  //Delete the node
  second.next = second.next.next;
  return sentinel.next;
}

//Remove Duplicates from Linked List
//Time:=O(n);
//Space:=O(1);
function removeDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

//Odd Even Linked List ;
//Time:=O(n);
//space:=O(1);

function OddEvent(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}

//Swap Nodes in Pairs
//time:=O(n);
function swapNode(head) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }
  return sentinel.next;
}

//Add Two Numbers
//time:=O(n);
//spcae:=O(1);
function addTwoLinkedNum(l1, l2) {
  let ans = new ListNode();
  let temp = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum =
      (l1==null ? 0 : l1.val) + (l2==null ? 0 : l2.val) + carry;
    carry = Math.trunc(sum / 10);
    let digit = Math.floor(sum % 10);

    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return temp.next;
}
