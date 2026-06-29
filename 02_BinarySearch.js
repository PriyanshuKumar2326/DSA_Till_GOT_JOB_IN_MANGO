let arr=[-1,0,3,5,9,12];

function binarySearch(target,arr){
  let left=0;
  let right=arr.length-1;
  while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(target==arr[mid]){
      return mid;
    }
    if(target>arr[mid]){
      left=mid+1;
      
    }else{
      right=mid-1
      
    }
  }
  return -1;
}
// console.log(binarySearch(9,arr))
//timeComplexity:-O(log n base 2)
//spaceComplexity:-O(1) 

console.log(Math.trunc((0+1)/2))