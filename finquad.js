function findArrayQuadruplet(arr, s) {
  // your code goes here
  const ar=arr.sort((a, b) => a - b)
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
    for(let k=j+1; k<arr.length; k++){
     for(let l=k+1;l<arr.length; l++){
       if(ar[i]+ar[j]+ar[k]+ar[l] === s){
         return [arr[i],arr[j],arr[k],arr[l]]
       }
     }
    }
    }  
  }
  return []
}
