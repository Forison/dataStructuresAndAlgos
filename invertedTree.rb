Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def invert_tree(root)
    return if root.nil?
    left = invert_tree(root.left)
    right= invert_tree(root.right)
    root.right = left
    root.left = right
    return root
end