Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def merge_k_lists(lists)
    i = 0
    arr = []
    while i<lists.size
      current = lists[i]
      until current.nil?
        arr << current.val  
        current = current.next
      end
      i+=1
    end
    arr.sort
end