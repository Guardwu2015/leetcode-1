var isSymmetric = function(root) {
    if (root === null) return true;
    return compare(root.left, root.right);

    function compare(node1, node2) {
        if (node1 === null && node2 === null) return true;
        else if ((node1 === null && node2 !== null)
            || (node1 !== null && node2 === null)) return false;
        else {
            return ((node1.val == node2.val)
                && compare(node1.left, node2.right)
                && compare(node1.right, node2.left));
        }
    }   
};