var reverseWords = function(str) {
    var len = str.length;
    if (len < 1) return str;
    var result = "";
    var bStart = true;
    var iStart = null;
    var i = len - 1;
    while (i >= 0) {
        var char = str.charAt(i);
        if (char == " " || char == "\t") { //splitter
            if (iStart !== null) {
                if (bStart) {
                    result = str.substring(i + 1, iStart + 1);
                    bStart = false;
                }
                else {
                    result += " " + str.substring(i + 1, iStart + 1);
                }
                iStart = null;
            }
        }
        else {
            if (iStart === null) iStart = i;
        }
        i--;
    }
    if (iStart !== null) {
        if (bStart) {
            result = str.substring(i + 1, iStart + 1);
        }
        else {
            result += " " + str.substring(i + 1, iStart + 1);
        }
    }
    return result;
};