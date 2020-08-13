def my_each(array)
  my_size = array.size 
  puts "my_size: #{my_size}"
  my_size.times do
    yield
  end

end 
array = [1,2,3]
array.each{ |a| p "here #{a}"}