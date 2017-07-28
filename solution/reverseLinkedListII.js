var reverseBetween = function(head, m, n) {
    if (m == n) return head;
    var nodePreReverse = null;

    var node = head;
    var i = 1;
    while (i < m) {
        nodePreReverse = node;
        node = node.next;
        i++;
    }
    var nodeReverseBegin = node;
    var nodeNext = node.next;

    //i should be m now
    while (i < n) {
        i++;
        var nodeReverseEnd = nodeNext;
        var nodeNextNext = nodeNext.next;
        nodeNext.next = node;
        node = nodeNext;
        nodeNext = nodeNextNext;
    }
    nodeAfterReverse = nodeNextNext;
    nodeReverseBegin.next = nodeAfterReverse;
    if (nodePreReverse !== null){
        nodePreReverse.next = nodeReverseEnd;
        return head;
    }
    else return nodeReverseEnd;    
};