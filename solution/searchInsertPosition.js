/*
 * 二分法查找，当start和end只相差1的时候，mid就等于start，mid-1有可能小于start（在end>start的情形下，mid+1永远也不会大于end的
 */

var searchInsert = function (nums, target) {
    var len = nums.length;
    return searchIndex(0, len - 1);

    function searchIndex(start, end) {
        if (start >= end) {
            if (target == nums[start]) return start;
            else if (target <= nums[start]) return start;
            else return end + 1;
        }
        var mid = Math.floor((start + end) / 2);
        var comp = nums[mid] - target;
        if (comp === 0) return mid;
        else if (comp > 0) return searchIndex(start, mid - 1);
        else return searchIndex(mid + 1, end);
    }
};