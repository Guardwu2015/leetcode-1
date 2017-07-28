var maxSubArray = function(nums) {
    var len = nums.length;
    if (len === 0) return 0;
    var maxSum = nums[0];
    var curSum = nums[0];
    for (var i = 1; i < len; i++) {
        curSum = curSum < 0 ? nums[i] : nums[i] + curSum;
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;  
};