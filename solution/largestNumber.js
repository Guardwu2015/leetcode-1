var largestNumber = function(nums) {
    var len = nums.length;
    var max = 0;
    var strs = [];
    for (var i = 0; i < len; i++) {
        if (nums[i] > max) max = nums[i];
        strs.push(nums[i].toString());
    }
    if (max === 0) return "0";
    strs.sort(strDesc);
    return strs.join("");

    function strDesc(a, b) {
        var c1 = a + b;
        var c2 = b + a;
        if (c1 > c2) return -1;
        else if (c1 < c2) return 1;
        else return 0;
    } 
};