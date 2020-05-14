# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

def remove_nth_from_end(head, n)
    if head.next.nil?
      return []
    end
    current= head
    current_two= head
    current_three= head
    length= 1
    until current.next.nil?
      current = current.next
      length+=1
    end
    node_before_target_post = length - n
    if node_before_target_post == 0
      current_two = current_two.next
      return current_two
    end
    node_after_target_post = (length - n) + 2
    i = 1
    until i==node_before_target_post
      current_two = current_two.next
      i+=1
    end
    if !current_two.next.next.nil?
    node_to_be_deleted = current_two.next
    j=1
    until j==node_after_target_post
      current_three = current_three.next
      j+=1
    end
    current_two.next = current_three
    current_two = head
    return current_two
    elsif current_two.next.next.nil?
      current_two.next = nil
      current_two = head
      return current_two
    end
  end