var subsets = function(nums) {
    var len = nums.length;
    return findSubsets(len - 1);

    function findSubsets(k) {
        if (k === 0) return [[], [nums[0]]];
        var resPrev = findSubsets(k - 1);
        var res = resPrev.slice();
        for (var i = 0; i < resPrev.length; i++) {
            var arr = resPrev[i].slice();
            arr.push(nums[k]);
            res.push(arr);
        }
        return res;
    }    
};