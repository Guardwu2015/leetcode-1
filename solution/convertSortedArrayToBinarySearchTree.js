var sortedArrayToBST = function(nums) {
    var len = nums.length;
    if (len === 0) return null;
    return construct(0, len - 1);

    function construct(iStart, iEnd) {
        if (iStart == iEnd) {
            return new TreeNode(nums[iStart]);
        }
        var iMid = Math.floor((iStart + iEnd) / 2);
        var node = new TreeNode(nums[iMid]);
        if (iMid - 1 >= iStart) node.left = construct(iStart, iMid - 1);
        node.right = construct(iMid + 1, iEnd);
        return node;
    }    
};