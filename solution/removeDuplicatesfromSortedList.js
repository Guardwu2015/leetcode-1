var deleteDuplicates = function(head) {
    if (head === null) return null;
    var nodePrev = null;
    var node = head;
    var singlePrev = head;
    var bStart = true;
    while (node !== null) {
        if (nodePrev !== null && node.val != nodePrev.val) {
            singlePrev.next = node;
            singlePrev = node;
        }
        nodePrev = node;
        node = node.next;
    }
    singlePrev.next = null;
    return head;   
};