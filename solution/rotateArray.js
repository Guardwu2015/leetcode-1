var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        var num = nums.pop();
        nums.unshift(num);
    }    
};