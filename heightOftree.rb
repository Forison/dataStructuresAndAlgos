def max_depth(root)
    return 0 if root.nil?
    return 1 if root.left == nil && root.right == nil
    left = max_depth (root.left)
    right = max_depth(root.right)
    return [ left ,right ].max + 1
  end