var hasCycle = function(head) {
    if (head === null) return false;
    var set = new Set();
    var node = head;
    while (node !== null) {
        if (set.has(node)) return true;
        set.add(node);
        node = node.next;
    }
    return false;
};