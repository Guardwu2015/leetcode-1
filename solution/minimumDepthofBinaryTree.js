var minDepth = function(root) {
    if (root === null) return 0;
    var min = Infinity;
    dfs(root, 1);
    return min;

    function dfs(node, level) {
        if (level > min) return;
        if (node.left === null && node.right === null) {
            if (level < min) min = level;
        }
        else {
            if (node.left !== null) dfs(node.left, level + 1);
            if (node.right !== null) dfs(node.right, level + 1);
        }
    }
};