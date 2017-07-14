var isBalanced = function(root) {
    return dfs(root) !== null;

    function dfs(node) {
        if (node === null) return 0;
        var hL = dfs(node.left);
        var hR = dfs(node.right);
        if (hL === null || hR === null
            || hR > hL + 1 || hL > hR + 1) return null;
        return hL > hR ? hL + 1 : hR + 1;
    }
};