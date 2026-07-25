//Stack & Queue 

//Stack
let stack=[]; // creating stack it is like arr in javaScript 
stack.push(1) //add element 
stack.push(2);
stack.push(3);
// console.log(stack)

stack.pop();
// console.log(stack) 

// console.log(stack[stack.length-1])// top element 


//Queue 

let queue=[];
queue.push(1);//enqueue
queue.push(2);
queue.push(3);
queue.push(4); 
//console.log(queue)
//queue.shift(); // dequeue
//console.log(queue) 
// console.log(queue[0])


//Implement of Stack and Queue

//Create stack 
var MyStack=function(){
  this.q1=[];
  this.q2=[];
}

MyStack.prototype.push=function(x){
  this.q1.push(x);
}

MyStack.prototype.pop=function(){
let n=this.q1.length;
for(let i=0;i<n-1;i++){
   let frontEle=this.q1.shift();
   this.q2.push(frontEle);
}

let ans= this.q1.shift();
//exchange 
let temp=this.q1;
this.q1=this.q2;
this.q2=temp;

return ans;
} 

//Top 
MyStack.prototype.top=function(){
  let n=this.q1.length;
  for(let i=0;i<n-1;i++){
    this.q2.push(this.q1.shift());
  }
  let front=this.q1[0];
  this.q2.push(this.q1.shift());
  let temp=this.q1;
  this.q1=this.q2;
  this.q1=temp;
  return front;
} 

//Empty 

MyStack.prototype.empty=function(){
  return this.q1.length===0
}