function getIndicesOfItemWeights(arr, limit) {
  let hash = {} 
  for(let i = 0; i < arr.length; i++) {
    let current = arr[i] 
    if(current in hash) {
      return [i, hash[current]]
    }
    let diff = limit - current 
    hash[diff] = i
  }
  return []
}