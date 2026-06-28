let arr=[3,5,1,7,2];

function bubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let isSwapped=false
    for(let j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];

        isSwapped=true
      }
    }
    if(!isSwapped) break;
  }
  
  return arr;
}
console.log(bubbleSort(arr));
//timeComplexity:-O(n^2)
//spaceComplexity:-O(1) , constant