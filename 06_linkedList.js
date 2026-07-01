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
    while (curr != null) {
      curr = curr.next();
    }
    curr.next = newNode;
  }
  this.size++;
}
