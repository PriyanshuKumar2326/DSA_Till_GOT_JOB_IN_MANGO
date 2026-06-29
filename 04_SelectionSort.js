let arr=[7,1,5,4,3,2];

function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min=i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
       min=j;  
      }
    }
     [arr[i],arr[min]]=[arr[min],arr[i]]
  }
  return arr;
}
console.log(selectionSort(arr)) 

// for(let i=0;i<arr.length-1;i++){
//   for(let j=i+1;j<arr.length-1;j++){
//     console.log(j)
//   }
// }