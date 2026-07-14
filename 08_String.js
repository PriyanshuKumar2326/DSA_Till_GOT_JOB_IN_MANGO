//GLength of the last word;
let string = "A boy dream is to Be Army officer";
// function lengthWord(string){
//   let answer=string.trim().split(" ");
//   return answer[answer.length-1].length;
// }

//By creating own function
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

function lengthWord(string){
  let n=string.length-1;
  let count=0;
  while(n>=0){
    if(string[n]!=" ") break;
    n--;
  }
  while(n>=0){
    if(string[n]===" ") break;
    count++;
    n--;
  }
  return count;
}

console.log(lengthWord(string));
