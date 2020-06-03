$count=0
def minimumMovement(obLan)
 
return $count+=1 if !obLan.include?(1) || !obLan.include?(2) || !obLan.include?(3)

if obLan[0]!=2
  obLan=[0+1..obLan.size]
  minimumMovement(obLan)
elsif obLan.index(1) > obLan.index(2) && obLan.index(1)> obLan.index(3)
  obLan = obLan[obLan.index(1) ..obLan.size]
  minimumMovement(obLan)
  $count+=1
elsif obLan.index(2) > obLan.index(1) && obLan.index(2)> obLan.index(3)
  obLan = obLan[obLan.index(2) ..obLan.size]
  minimumMovement(obLan)
  $count+=1
   
elsif obLan.index(3) > obLan.index(1) && obLan.index(3)> obLan.index(2)
  obLan = obLan[obLan.index(3) ..obLan.size]
  minimumMovement(obLan)
  $count+=1 
end
$count
end

# obLan=[2,1,2]
# obLan=[3,1,3]
# obLan=[2,1,3,2]
# obLan=[2, 3, 2, 1, 3, 1]
# obLan=[3,2,2,1,2,1]
obLan=[1, 3, 1, 1, 2, 3, 2, 2, 2, 2, 3, 2, 2, 3, 3, 2, 3, 2, 2, 3, 1, 1, 3, 2, 3, 1, 1, 1, 2, 1, 2, 3, 2, 1, 2, 1, 3, 2, 3, 3, 3, 1, 2, 2, 1, 1, 2, 1, 3, 2, 1, 3, 3, 2, 3, 3, 1, 3, 1, 2, 3, 1]
p minimumMovement(obLan)
