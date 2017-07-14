var fullJustify = function(words, maxWidth) {
    var len = words.length;
    var i = 0;
    var iLineStart = 0;
    var iLineEnd = 0;
    var lenLine = 0;
    var result = [];
    while (i < len) {        
        var lenWord = words[i].length;
        var numSpaces = iLineEnd > 0 ? iLineEnd - iLineStart + 1 : 0;
        if (lenLine + lenWord + numSpaces > maxWidth) {
            //figure out the total spaces
            var totalSpaces = maxWidth - lenLine;
            var additional = totalSpaces % (numSpaces-1);
            var spaces = Math.floor(totalSpaces / (numSpaces-1));
            var bStart = true;
            if (iLineStart == iLineEnd) {
                result.push(makeSimpleLine(iLineStart, iLineEnd, maxWidth));
            }
            else {
                result.push(makeJustifiedLine(iLineStart, iLineEnd, spaces, additional));
            }
            iLineStart = i;
            iLineEnd = i;
            lenLine = lenWord;
        }
        else {
            iLineEnd = i;
            lenLine += lenWord;
        }
        i++;
    }
    result.push(makeSimpleLine(iLineStart, iLineEnd, maxWidth));
    return result;
}