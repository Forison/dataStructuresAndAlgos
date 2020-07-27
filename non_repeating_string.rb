def first_non_repeating_letter(str)
  p str
  return str if str.size==1 or str==''
  text = str.downcase.split('')
 hash_table=text.each_with_object(Hash.new(0)){ |word,counts| counts[word] += 1 }
  hash_table.values
  first_value =hash_table.values.index(hash_table.values.min)
  val_size =hash_table.values.size
  return "" if val_size == hash_table.values.count(hash_table.values.min)    
  res = hash_table.keys[first_value]
  if str.include?(res)
    return res
  else
    return res.upcase
  end
end
