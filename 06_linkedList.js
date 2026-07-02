//Create Node

function Node(value) {
  this.value = value;
  this.next = null;
}

//Create NodeList

function MyNodeList() {
  this.head = null;
  this.size = 0;
}

//Adding Node to Head of the LinkedList

function addToHead(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

//Adding Node to Tail of the LinkedList

function addToTail(value) {
  let newNode = new Node(value);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next();
    }
    curr.next = newNode;
  }
  this.size++;
}

//Adding Node at the Index

function addAtIndex(index, value) {
  if (index < 0 || index > this.size) return;
  let newNode = new Node(value);

  if (index == 0) {
    this.addToHead(value);
    return;
  } else if (index == this.size) {
    this.addToTail(value);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
}

//Get the value from the NodeList

function get(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.value;
}

//Delete the Node from the NodeList

function deleteNode(index) {
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr=curr.next;
    }
    curr.next=curr.next.next;
  }
  this.size--;
}
