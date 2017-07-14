var buildTree = function(inorder, postorder) {
    if (inorder === null) return null;
    var len = inorder.length;
    return construct(0, len - 1);

    function construct(startI, endI) {
        if (startI > endI) {
            return null;
        }
        else if (startI == endI) {
            postorder.pop();
            return new TreeNode(inorder[startI]);
        }
        else {
            var rootNum = postorder.pop();
            var indexRootI = inorder.indexOf(rootNum);
            var root = new TreeNode(inorder[indexRootI]);
            root.right = construct(indexRootI + 1, endI);
            root.left = construct(startI, indexRootI - 1);
            return root;
        }
    }    
};