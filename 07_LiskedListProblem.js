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
  let slow = fast = head;
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

function linkedListPalindrome(head){
  let arr=[];
  let curr=head;
  while(curr){
    arr.push(curr.value);
    curr=curr.next;
  }
  let start=0;
  let end=arr.length-1;
  while(start<end){
    if(arr[start]!=arr[end]){
      console.log("Not palindrome Linked List");
      return;
    }
    start++;
    end--;
  }
  console.log("Palindrome Linked List")
}

//Linked List Optimize 
//time:=O(n);
//space:=O(1);
function LinkedPalin(head){
  //Find the middle of element

  let slow=fast=head;
  while(fast!=null && fast.next!=null){
   slow=slow.next;
   fast=fast.next.next;
  }

  
  //reverse the second half of list
  let prev=null;
  let curr=slow;
  while(curr!=null){
  let temp=curr.next;
   curr.next=prev;
   prev=curr;
   curr=temp
  }

  //checking for plaindrome
  let first=head;
  let second=prev;

  while(second!=null){
    if(first.value!==second.value){
     return false
    }
    first=first.next;
    second=second.next;
  }
  return true;
} 


//Intersection of two Linked List
//Brute force   time:=O(m*n)=O(n^2);
// space=O(1);
function checkedLiskedList(headA,headB){
  let first=headA;
  let second=headB;
  let seenNode = new Set();
  while(first){
    seenNode.add(first);
    first=first.next;
  }
  while(second){
    if(seenNode.has(second)){
      return second;
    }
    second=second.next
  }
  return null;

}