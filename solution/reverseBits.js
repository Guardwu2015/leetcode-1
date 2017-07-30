var reverseBits = function (n) {
    var str = n.toString(2);
    var arr = str.split("");
    arr.reverse();
    var len = arr.length;
    for (var i = 0; i < 32 - len; i++) {
        arr.push("0");
    }
    return parseInt(arr.join(""), 2);
};