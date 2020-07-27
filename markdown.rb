def markdownparser(markdown)
  no_space = markdown.gsub(/\s+/,'*')==markdown
  get_content = markdown.gsub('#', "")
  marks = markdown.split('')
  count_pound=0
  (marks.size-1).times do |i|
    if(marks[i]=="#")
      count_pound+=1
    elsif marks[i]==" " and marks[i+1]=="#" and count_pound>=1
      get_content= marks[i+1..marks.size].join('')
      break
    elsif marks[i]==" " and count_pound==0
      i = marks.index("#") if marks.include?("#")
    elsif (('a'..'z').to_a.include?(marks[i]) || ('A'..'Z').to_a.include?(marks[i])) and count_pound==0
      return markdown 
    end
    
  end
  return markdown if count_pound>6 or count_pound < 1 or no_space
  return "<h#{count_pound}>#{get_content.strip}</h#{count_pound}>"
end
