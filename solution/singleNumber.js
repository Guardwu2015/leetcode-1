var singleNumber = function(nums) {
    var set = new Set();
    var len = nums.length;
    var num;
    for (var i = 0; i < len; i++) {
        num = nums[i];
        if (set.has(num)) set.delete(num);
        else set.add(num);
    }
    if (set.size != 1) return 0;
    else {
        num = 0;
        set.forEach(function (value) {
            num = value;
        });
        return num;
    }    
};

/*
 *  var hasCycle = function (head) {
	    if (head === null || head.next === null) return false;
	    var fast = head;
	    var slow = head;
	    while (fast.next !== null && fast.next.next !== null) {
	        fast = fast.next.next;
	        slow = slow.next;
	        if (slow == fast) return true;
	    }
	    return false;
	};
 */