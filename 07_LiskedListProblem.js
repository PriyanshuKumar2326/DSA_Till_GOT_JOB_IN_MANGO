//Middle of the Linked List 

  function middle(head){
    let slow=head;
    let fast=head;
    while(fast !=null & fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
    }
    return slow;
  } 


//Reverse the LinkedList 

function reverse(head){
  let prev=null;
  let curr=head;
  while(curr){
    temp=curr.next;
    curr.next=prev;
    prev=curr;
    curr=temp;
  }
  head=prev;
  return head
}