var splitInteger = function(num, parts) {
  // Complete this function
//   Math.floor((20/6))
let results=[] 
if (num%parts===0){
  let i = 0;
  while(i<parts){
    results.push(num/parts);
    i+=1
  };
}else{
  const segement=num/parts;
  const newPart = parts - 2;
  const newConsideration = newPart*Math.floor(segement);
  const remSegement = (num - newConsideration)/2;
  for(let i=0;i<parts;i++){
    if(i<newPart){
      results.push(Math.floor(segement))
    }else{
      if(remSegement%2===0){
      results.push(remSegement)
      i+=1
      results.push(remSegement)
        }else{
          results.push(Math.floor(remSegement))
          i+=1
          results.push(Math.ceil(remSegement))
        }
    }
  }
}
return results
}