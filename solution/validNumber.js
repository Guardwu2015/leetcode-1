var isNumber = function(s) {
    if (s === "") return false;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) != " ") break;
    }
    if (i == s.length) return false;
    return !isNaN(Number(s.substring(i)));
};