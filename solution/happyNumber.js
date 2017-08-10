var isHappy = function(n) {
    var nums = new Set();
    var val = n;
    while(val != 1){
        if(nums.has(val)) return false;
        else nums.add(val);
        
        var sum = 0;
        while(val){
            var dig = val % 10;
            sum += dig*dig;
            val = (val-dig)/10;
        }
        val = sum;
    }
    return true;
};