var levelOrderBottom = function(root) {
    if (root === null) return [];
    var nodes = [];
    var result = [];
    nodes.push([root]);
    var i = 0; 
    var j;
    while (nodes[i].length > 0) {
        var nodeArray = [];
        for (j = 0; j < nodes[i].length; j++) {
            var node = nodes[i][j];
            if (node.left !== null) nodeArray.push(node.left);
            if (node.right !== null) nodeArray.push(node.right);
        }
        nodes.push(nodeArray);
        i++;
    }
    for (var k = i - 1; k >= 0; k--) {
        var resArray = [];
        for (j = 0; j < nodes[k].length; j++) {
            resArray.push(nodes[k][j].val);
        }
        result.push(resArray);
    }
    return result;     
};