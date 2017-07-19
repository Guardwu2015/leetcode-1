var twoSum = function(numbers, target) {
    var len = numbers.length;
    if (len === 0) return null;
    var iLeft = 0;
    var iRight = len - 1;
    var res = [];
    while (iLeft <= iRight) {
        var sum = numbers[iLeft] + numbers[iRight];
        if (sum > target) {
            iRight--;
        }
        else if (sum == target) {
            return [iLeft + 1, iRight + 1];
        }
        else {
            iLeft++;
        }
    }  
    return null;
};
