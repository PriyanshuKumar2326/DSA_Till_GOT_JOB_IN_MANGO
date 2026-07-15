//Get Length of the last word;
let string = "A boy dream is to Be Army officer";
//Time:=O(n);
//spcae:=O(n);
// function lengthWord(string){
//   let answer=string.trim().split(" ");
//   return answer[answer.length-1].length;
// }

//By creating own function
//Time:=O(n);
//Spcae:=O(1)
// function lengthWord(string) {
//   let n = string.length - 1;
//   let count = 0;
//   while (n >= 0) {
//     if (string[n] === " ") {
//       n--;
//     } else {
//       break;
//     }
//   }

//   while (n >= 0) {
//     if (string[n] !== " ") {
//       count++;
//       n--;
//     } else {
//       break;
//     }
//   }
//   return count;
// }

// function lengthWord(string){
//   let n=string.length-1;
//   let count=0;
////remove space
//   while(n>=0){
//     if(string[n]!=" ") break;
//     n--;
//   }
////count the last word
//   while(n>=0){
//     if(string[n]===" ") break;
//     count++;
//     n--;
//   }
//   return count;
// }

//With one loop
//time:O(n);
//space:O(1);
function lengthWord(string){
  let n=string.length-1;
  let count=0;
  for(let i=n;i>=0;i--){
     if(string[i]!=" "){
     count++;
    }else if(string[i]==" " && count>0){
      break;
    }
  }
  return count
}

console.log(lengthWord(string));
