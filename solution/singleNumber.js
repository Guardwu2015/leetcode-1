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