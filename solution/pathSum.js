var hasPathSum = function(root, sum) {
    if (root === null) return false;
    var bFound = false;
    dfs(root, 0);
    return bFound;

    function dfs(node, total) {
        if (bFound) return;
        if (node.left === null && node.right === null) {
            if (node.val + total == sum) bFound = true;
        }
        else {
            if (node.left !== null) dfs(node.left, total + node.val);
            if (node.right !== null) dfs(node.right, total + node.val);
        }
    }    
};