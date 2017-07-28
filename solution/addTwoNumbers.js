var addTwoNumbers = function(l1, l2) {
    var sum = l1.val + l2.val;
    var lFirst = new ListNode(sum % 10);
    var carry = sum >= 10 ? 1 : 0;
    var lPrev = lFirst;
    l1 = l1.next;
    l2 = l2.next;
    while (l1 !== null || l2 !== null) {
        var v1 = l1 === null ? 0 : l1.val;
        var v2 = l2 === null ? 0 : l2.val;
        sum = v1 + v2 + carry;
        var l = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        lPrev.next = l;
        lPrev = l;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        l = new ListNode(1);
        lPrev.next = l;
    }
    return lFirst;
};

//test

var a1 = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

var b1 = new ListNode(5);
var b2 = new ListNode(6);
var b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

var s = addTwoNumbers(a1, b1);