var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    var lenA = 0;
    var nodeA = headA;
    while (nodeA !== null) {
        lenA++;
        nodeA = nodeA.next;
    }
    var lenB = 0;
    var nodeB = headB;
    while (nodeB !== null) {
        lenB++;
        nodeB = nodeB.next;
    }
    var iDiff = 0;
    nodeA = headA;
    nodeB = headB;
    if (lenA > lenB) {
        while (iDiff < lenA - lenB) {
            nodeA = nodeA.next;
            iDiff++;
        }
    }
    else if (lenA < lenB) {
        while (iDiff < lenB - lenA) {
            nodeB = nodeB.next;
            iDiff++;
        }
    }
    while (nodeA !== null && nodeB !== null) {
        if (nodeA == nodeB) return nodeA;
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return null;    
};