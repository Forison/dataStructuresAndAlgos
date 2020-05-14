 # Definition for singly-linked list.
 # class ListNode
 #     attr_accessor :val, :next
 #     def initialize(val = 0, _next = nil)
 #         @val = val
 #         @next = _next
 #     end
 # end
 # @param {ListNode} head
 # @return {ListNode}
def reverse_list(head)
    ar=[]
    current = head
    return ar if head.nil?
    until current.next.nil?
       ar << current.val
       current=current.next 
    end
    ar << current.val
    ar.reverse
end