var topKFrequent = function(nums, k) {
    let hash = {};
      for(let i = 0; i< nums.length; i++){
        hash[nums[i]] = nums[i] in hash ? hash[nums[i]]+1 : 1;
      }
      console.log(hash)
   return Object.keys(hash).sort((a,b)=>hash[b] - hash[a]).slice(0,k);
  };