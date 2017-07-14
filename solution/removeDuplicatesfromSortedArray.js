/*从尾逆向扫描，可以避免因为删除元素引起index的错误（每次删除有可能删多个）。
 * 在找到重复数的时候，有一个内循环一直找到第一个不是重复的数，然后删除所有重复的数。
 */

var removeDuplicates = function (nums) {
    var len = nums.length;
    if (len < 2) return len;
    var numPrev = nums[len - 1];
    var iPos = len - 2;
    while (iPos >= 0) {
        if (nums[iPos] == numPrev) { //duplicate found
            var dupStart = iPos;
            while (iPos >= 0 && nums[iPos] == numPrev) iPos--;
            nums.splice(iPos + 1, dupStart - iPos);
        }
        else {
            numPrev = nums[iPos];
            iPos--;
        }
    }   
    return nums.length;
};