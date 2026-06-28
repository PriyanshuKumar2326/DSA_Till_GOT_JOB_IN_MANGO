// function swap(a,b){
//   a=a+b;
//   b=a-b;
//   a=a-b;
//   console.log("a =",a);
//   console.log("b =",b);
// }

// swap(5,10);

//check number is even or not 

// function evenOrNot(num){
//   if(num%2===0){
//     console.log("even",num)
//   }else{
//     console.log("odd",num);
//   }
// }

// evenOrNot(5); 

//Reverse String. 

// function revers(str){
//   let arr=str.split('');
//   let start=0;
//   let end=str.length-1;
//   while(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]];
//     start++;
//     end--;
//   }

//   console.log(arr.join(''));
// }

// revers("Apple"); 


// function palindrome(str){
//   let rev=str.split('').reverse().join('');
//   if(str==rev){
//     console.log("Palindrome", str);
//   }else{
//     console.log("Not palindrome",str);
//   }
// }
// palindrome("maam") 

//Find Largest Number in the Arr. 

// function LargestNumArr(arr){
//   // let largest = -Infinity;
//   // for(let i=0;i<arr.length;i++){
//   //   if(arr[i] > largest){
//   //     largest=arr[i];
//   //   }
//   // }
//   // console.log(largest); 
//   return Math.max(...arr);
// }

// console.log(LargestNumArr([1,4,5,22,56,44])) 

//Count the vowel in a string 

// function CountVowel(string){
//   let count=0;
//   let vowel="aeiouAEIOU"
//   for(let car of string){
//     if(vowel.includes(car)){
//       count++;
//     }
//   }
//   console.log(count)
// }

// CountVowel("Apple") 


//Remove duplicate from the Array 

// function RemoveDuplicate(arr){
//   // let newArr=[];
//   // for(let num of arr){
//   //   if(!newArr.includes(num)){
//   //     newArr.push(num);
//   //   }
//   // }
//   // console.log(newArr) 
//   return [...new Set(arr)]
// }

// console.log(RemoveDuplicate([1,1,2,2,3,3,4,4,5,5]))  

// function factorialNum(num){
//   let fac=1;
//  for(let i=1;i<=num;i++){
//   fac=fac*i;
//  }
//  return fac;
// }

// console.log(factorialNum(5))  


//Print all duplicate string

function fundDup(str){
  let map={};
  let duplicate=[];
  for(let char of str){
    if(map[char]){
      map[char]++;
    }else{
      map[char]=1;
    }
  }

  for(let key in map){
    if(map[key]>1){
      duplicate.push(key);
    }
  }
  console.log(duplicate);
}

fundDup("Apple");

