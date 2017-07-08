//给定一个值和整数数组，要求返回数组中两个元素相加等于该元素的索引
//简单扫描，若前一个元素跟后一个元素相加等于target，然后返回两个元素的索引

var twoSum = function (nums, target) {
    var len = nums.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                return [i,j];
            }
        }
    }
    return null;
};