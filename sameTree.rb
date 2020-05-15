Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end
def is_same_tree(p, q)
    #traverse both tree in preorder and store their values in array
    arr1 = pre_order(p)
    arr2 = pre_order(q)
    return true if arr1 == arr2
    false
  end
  # helper method totraverse the tree in pre-order
  def pre_order(tree)
    return ' ' if tree.nil?
    res= "#{tree.val}"
    res += pre_order(tree.left)
    res += pre_order(tree.right)
  end