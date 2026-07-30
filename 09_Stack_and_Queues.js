//Stack & Queue

//Stack
let stack = []; // creating stack it is like arr in javaScript
stack.push(1); //add element
stack.push(2);
stack.push(3);
// console.log(stack)

stack.pop();
// console.log(stack)

// console.log(stack[stack.length-1])// top element

//Queue

let queue = [];
queue.push(1); //enqueue
queue.push(2);
queue.push(3);
queue.push(4);
//console.log(queue)
//queue.shift(); // dequeue
//console.log(queue)
// console.log(queue[0])

//Implement of Stack using Queue
//with two queue
//Create stack
// var MyStack=function(){
//   this.q1=[];
//   this.q2=[];
// }

// MyStack.prototype.push=function(x){
//   this.q1.push(x);
// }

// MyStack.prototype.pop=function(){
// let n=this.q1.length;
// for(let i=0;i<n-1;i++){
//    let frontEle=this.q1.shift();
//    this.q2.push(frontEle);
// }

// let ans= this.q1.shift();
// //exchange
// let temp=this.q1;
// this.q1=this.q2;
// this.q2=temp;

// return ans;
// }

// //Top
// MyStack.prototype.top=function(){
//   let n=this.q1.length;
//   for(let i=0;i<n-1;i++){
//     this.q2.push(this.q1.shift());
//   }
//   let front=this.q1[0];
//   this.q2.push(this.q1.shift());
//   let temp=this.q1;
//   this.q1=this.q2;
//   this.q1=temp;
//   return front;
// }

// //Empty

// MyStack.prototype.empty=function(){
//   return this.q1.length===0
// }
//with one Queue

// var MyStack1=function(){
//   this.q=[];
// }

// MyStack1.prototype.push=function(x){
//   this.q.push(x)
// }

// MyStack1.prototype.pop1=function(){
//   let n=this.q.length;
//   for(let i=0;i<n-1;i++){
//     this.q.push(this.q.shift())
//   }
//   return this.q.shift()
// }

// MyStack1.prototype.top1=function(){
//   let n=this.q.length;
//   for(let i=0;i<n-1;i++){
//     this.q.push(this.q.shift());
//   }
//   let ans = this.q[0];
//   this.q.push(this.q.shift())
//   return ans
// }

// MyStack1.prototype.empty=function(){
//   return this.q.length===0;
// }

//Implement Queue using Stacks

//Valid Parentheses

// function isValid(s){
//   let store=[];
//   for(let i=0;i<s.length;i++){
//     if(s[i] == "{" ||  s[i]== "(" || s[i] == "[" ){
//       store.push(s[i])
//     }else {
//       let temp=store.pop();
//       if(!temp || (temp === "[" &&  temp !== "]") || (temp === "{" && temp !== "}") || (temp === "(" && temp !== ")")){
//         return false;
//       }
//     }
//   }
//   return store.length === 0;
// }

function isValid(s) {
  let stack = [];
  let map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] !== ma[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//Min Stack

let MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (value) {
  if (this.stack.length === 0) {
    this.stack.push([value, value]);
  } else {
    this.stack.push([
      value,
      Math.min(value, this.stack[this.stack.length - 1][1]),
    ]);
  }
};

MinStack.prototype.pop = function () {
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

//Remove Outermost Parentheses

function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      let len = stack.length;
      if (len > 1) {
        ans += s[i];
      }
    } else {
      let len = stack.length;
      if (len > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }
  return ans;
}

//without stack

function removeOuter(s) {
  let level = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      {
        level > 1 ? (ans += s[i]) : 0;
      }
    } else {
      {
        level > 1 ? (ans += s[i]) : 0;
      }
      level--;
    }
  }
  return ans;
}

//Evaluate Reverse Polish Notation
//time: O(n);
//space:O(n)
function evaluate(s) {
  let stack = [];
  let store = new Set(["+", "*", "-", "/"]);
  for (let i = 0; i < s.length; i++) {
    if (!store.has(s[i])) {
      stack.push(Number(s[i]));
    } else {
      let op = s[i];
      let num1 = stack.pop();
      let num2 = stack.pop();
      switch (op) {
        case "+":
          stack.push(num2 + num1);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "*":
          stack.push(num2 * num1);
          break;
        case "/":
          stack.push(Math.trunc(num2 / num1));
          break;
      }
    }
  }
  return stack.pop();
}
