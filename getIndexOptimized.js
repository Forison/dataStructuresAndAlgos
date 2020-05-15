function getIndicesOfItemWeights(arr, limit) {
  let hash = {} 
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] in hash) {
      return [i, hash[arr[i]]]
    }
    let diff = limit - arr[i] 
    hash[diff] = i
  }
  return []
}
//[2, 7, 11, 15], 9