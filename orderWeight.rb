def order_weight(strng)
    nums=strng.split()
    i=0
    tracker=[]
    hash_table=Hash.new {|h,k| h[k] = [] }
    while(i<nums.size)
      tracker << nums[i].split('').map(&:to_i).reduce { |sum, int| sum + int }
      i+=1
    end
    j=0

    while (j<nums.size)
      hash_table[tracker[j]] << nums[j]
      j+=1
    end
    new_hash = Hash[hash_table.sort_by{|k,v| k}]
    res=[]
    new_hash.values.each do | val|
      if val.uniq != val.size 
        res << val.sort
      end
    end
    res.join(" ")
end
