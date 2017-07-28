var isPalindrome = function(s) {
    var len = s.length;
    if (len === 0) return true;
    var upS = s.toUpperCase();
    var front = 0;
    var rear= len - 1;
    while (front < rear) {
        var char1 = upS.charAt(front);
        var char2 = upS.charAt(rear);
        var bChar1 = isAlphaNumeric(char1);
        var bChar2 = isAlphaNumeric(char2);
        if (bChar1 && bChar2) {
            if (char1 == char2) {
                front++;
                rear--;
            } else return false;
        }
        else {
            if (!bChar1) front++;
            if (!bChar2) rear--;
        }
    }
    return true;

    function isAlphaNumeric(char) {
        if ((char >= "0" && char <= "9") ||
            (char >= "A" && char <= "Z")) return true;
        else return false;
    }   
};