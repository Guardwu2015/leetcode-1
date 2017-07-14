var lengthOfLastWord = function(s) {
    var len = s.length;
    if (len === 0) return 0;
    var iEnd = len - 1;
    while (iEnd >= 0 && s.charAt(iEnd) == ' ') iEnd--;
    if (iEnd < 0) return 0;
    var iStart = iEnd;
    while (iStart >= 0 && s.charAt(iStart) != ' ') iStart--;
    return iEnd - iStart;    
};