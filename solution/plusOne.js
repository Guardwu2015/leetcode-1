var plusOne = function(digits) {
    var len = digits.length;
    stepOne(len - 1);
    return digits;

    function stepOne(k) {
        if (digits[k] == 9) {
            digits[k] = 0;
            if (k === 0) digits.unshift(1);
            else stepOne(k - 1);
        }
        else digits[k]++;
    }    
};