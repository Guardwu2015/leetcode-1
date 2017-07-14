/*
 * 扫描这个字符串，先跟栈内的最后一个字符匹配，如果匹配上了，就弹出，如果没匹配上，就压入，当然如果栈内的字符多于剩余的字符，就可以直接判负了
 */

var isValid = function (s) {
    var stack = [];
    var len = s.length;
    for (var i = 0; i < len; i++) {
        var char = s.charAt(i);
        var stackLen = stack.length;
        if (stackLen === 0) stack.push(char);
        else {
            if (isMatch(stack[stackLen - 1], char)) stack.pop();
            else {
                if (!isValidChar(char) || stackLen > (len - i - 2)) return false;
                stack.push(char);
            }
        }
    }
    return stack.length === 0;
};

function isMatch(char1, char2) {
    if ((char1 == '(' && char2 == ')') ||
        (char1 == '{' && char2 == '}') ||
        (char1 == '[' && char2 == ']'))
        return true;
    else
        return false;
}

function isValidChar(char) {
    //only '(', '{' and '[' can be pushed in
    if (char == '(' || char == '{' || char == '[') return true;
    else return false;
}