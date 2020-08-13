# finding the number of element to be replaced to make the two string be equal
# str1 = "at", str2 =  "cat"		
# str1 = "boat",str2 = "got"

def deletion_distance(str1, str2)
  one = str1.split('')
  two = str2.split('')
  merger = str2.concat(str1).split('')
  intersection = one & two
  acc = intersection.size * 2
  merger.size - acc
end
p deletion_distance(str1, str2)