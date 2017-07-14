var maxDepth = function(root) {
    if (root === null) return 0;
    var nodes = [];
    nodes.push(root);
    var i = 0;
    while (nodes.length > 0) {
        var nextNodes = [];
        for (var j = 0; j < nodes.length; j++) {
            var node = nodes[j];
            if (node.left !== null) nextNodes.push(node.left);
            if (node.right !== null) nextNodes.push(node.right);
        }
        nodes = nextNodes;
        i++;
    }
    return i;    
};