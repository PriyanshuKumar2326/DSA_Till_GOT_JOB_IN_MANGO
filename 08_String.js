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
function lengthWord(string) {
  let n = string.length - 1;
  let count = 0;
  for (let i = n; i >= 0; i--) {
    if (string[i] != " ") {
      count++;
    } else if (string[i] == " " && count > 0) {
      break;
    }
  }
  return count;
}

// console.log(lengthWord(string));

//Find words containing character
//time:=O(n)
//space:=O(1)
// function containing(words,x){
//   let newArr=[];
//   for(let i=0;i<words.length;i++){
//     if(words[i].includes(x)){
//       newArr.psuh(i)
//     }
//   }
//   return newArr;
// }

function containing(words, x) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; i < words[i].length; j++) {
      if (words[i][j] === x) {
        newArr.push(i);
        break;
      }
    }
  }
  return newArr;
}

//Jewels and Stones
//time:=O(n)
//space:=O(1)
function jewelStone(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}
//Time:=O(n*m);
//space:=O(1);

function jeweStone(jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

//Optimize
//time:=O(n);
//space:=O(1);
function jewelSt(jewels, stones) {
  let store = {};
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (store[stones[i]]) {
      store[stones[i]]++;
    } else {
      store[stones[i]] = 1;
    }
  }

  for (let i = 0; i < jewels.length; i++) {
    if (store[jewels[i]]) {
      count += store[jewels[i]];
    }
  }

  return count;
}
//time:=O(n)
//space:O(1)
function jewelS(jewels, stones) {
  let store = new Set();
  count = 0;
  for (let i = 0; i < jewels.length; i++) {
    store.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (store.has(stones[i])) {
      //O(1)
      count++;
    }
  }
  return count;
}

//Find Most Frequent Vowel and Consonant
//time:=O(m+1)=O(n)
//space:=O(1) constant Space
function maxFreqSum(string) {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    map[string[i]] = !map[string[i]] ? 1 : map[string[i]]++;
    // if(!map[string[i]]){
    //   map[string[i]]=1
    // }else{
    //   map[string[i]]++
    // }
  }

  //find the max vowel and consonant inside the map

  let maxV = 0;
  let maxCon = 0;
  let vowel = "aeiouAEIOU";

  for (let key in map) {
    if (vowel.includes(key)) {
      if (map[key] > maxV) {
        maxV = map[key];
      }
    } else {
      if (map[key] > maxCon) {
        maxCon = map[key];
      }
    }
  }

  return maxV + maxCon;
}

//Split in Banlanced Strings
//time:=O(n);
//space=:=O(1)

function balancedString(string){

  let temp=0
  let balanced=0;
  for(let i=0;i<string.len;i++){
    if(string[i]=="R"){
      temp++
    }else {
      temp--
    }

    if(temp==0){
      ++balanced;  
    }
  }
  return balanced
}


//Largest Odd Number in String A

function largestOddNumber(num){
  let n=num.length-1;
  while(n>=0){
    if(Number(num[n])%2==1){
      return num.substring(0,n+1)
    }
    --n;
  }
  return ""
}