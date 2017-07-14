var isValidBST = function(root) {
    if (root === null) return true;
    return validateF(root) !== null;

    function validateF(node) {
        var left = node.left;
        var maxLeft = null;
        if (left !== null) {
            maxLeft = validateF(left);
            if (maxLeft === null) return null;
            if (maxLeft[1] >= node.val) return null;
        }
        var right = node.right;
        var maxRight = null;
        if (right !== null) {
            maxRight = validateF(right);
            if (maxRight === null) return null;
            if (maxRight[0] <= node.val) return null;
        }
        var min = maxLeft === null ? node.val : maxLeft[0];
        var max = maxRight === null ? node.val: maxRight[1];
        return [min, max];
    }
};